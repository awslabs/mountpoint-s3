// An example script showing usage of FUSE file descriptor as a mount point.
//
// Example usage:
// 	$ go build mounthelper.go
// 	$ sudo /sbin/setcap 'cap_sys_admin=ep' ./mounthelper # `mount` syscall requires `CAP_SYS_ADMIN`, alternatively, `mounthelper` can be run as root
//  $ ./mounthelper -mountpoint /tmp/mountpoint -bucket bucketname
//  $ # Mountpoint mounted at /tmp/mountpoint until `mounthelper` is terminated with ctrl+c.
package main

import (
	"errors"
	"flag"
	"fmt"
	"io/fs"
	"log"
	"os"
	"os/exec"
	"os/signal"
	"strings"
	"syscall"
)

var mountPoint = flag.String("mountpoint", "", "Path to mount the filesystem at")
var bucket = flag.String("bucket", "", "S3 Bucket to mount")

func main() {
	flag.Parse()

	if err := os.MkdirAll(*mountPoint, 0644); err != nil && !errors.Is(err, fs.ErrExist) {
		log.Panicf("Failed to create target mount point %s: %v\n", *mountPoint, err)
	}

	// 1. Open FUSE device
	fd, err := syscall.Open("/dev/fuse", os.O_RDWR, 0)
	if err != nil {
		log.Panicf("Failed to open /dev/fuse: %v\n", err)
	}
	defer syscall.Close(fd)

	var stat syscall.Stat_t
	err = syscall.Stat(*mountPoint, &stat)
	if err != nil {
		log.Panicf("Failed to stat mount point %s: %v\n", *mountPoint, err)
	}

	// 2. Perform `mount` syscall
	options := []string{
		fmt.Sprintf("fd=%d", fd),
		fmt.Sprintf("rootmode=%o", stat.Mode),
		fmt.Sprintf("user_id=%d", os.Geteuid()),
		fmt.Sprintf("group_id=%d", os.Getegid()),
	}
	err = syscall.Mount("mountpoint-s3", *mountPoint, "fuse", syscall.MS_NOSUID | syscall.MS_NODEV, strings.Join(options, ","))
	if err != nil {
		log.Panicf("Failed to call mount syscall: %v\n", err)
	}

	// 5. Perform `unmount` syscall once Mountpoint terminates
	defer func() {
		err := syscall.Unmount(*mountPoint, 0)
		if err != nil {
			log.Printf("Failed to unmount %s: %v\n", *mountPoint, err)
		}
		log.Printf("Succesfully unmounted %s\n", *mountPoint)
	}()

	// 3. Spawn Mountpoint with the fd
	mountpointCmd := exec.Command("./target/release/mount-s3",
		*bucket,
		fmt.Sprintf("/dev/fd/%d", fd),
		"--allow-delete")
	mountpointCmd.Stdout = os.Stdout
	mountpointCmd.Stderr = os.Stderr
	err = mountpointCmd.Run()
	if err != nil {
		log.Panicf("Failed to start Mountpoint: %v\n", err)
	}

	// 4. Close fd on parent
	err = syscall.Close(fd)
	if err != nil {
		log.Panicf("Failed to close fd on parent: %v\n", err)
	}

	done := make(chan os.Signal, 1)
	signal.Notify(done, syscall.SIGINT, syscall.SIGTERM)

	log.Print("Filesystem mounted, waiting for ctrl+c signal to terminate")
	<-done

	// 5. Will run here due to `defer`
}
