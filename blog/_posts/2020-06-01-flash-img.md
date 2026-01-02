---
layout: post
title: Flashing an OS Image on Linux
tags: raspberrypi raspbian os linux image
---

1. Download the ISO or IMG you want. You can `wget` from somewhere, use your own, whatever.

2. Format the target drive. We will use the linux tool fdisk for most of this.

    ```
    $ fdisk /dev/sdx
    ```

    This will start the format disk utility. You can see the availible commands by entering `m`, but here are the highlights:

    ```
    m – print help
    p – print the partition table
    n – create a new partition
    d – delete a partition
    q – quit without saving changes
    w – write the new partition table and exit
    ```

    We are just deleting any existing partitions from this drive. Enter `d` and select the partitions to delete, and enter `w` to write and leave the utility.

3. If you are flashing to a hard disk, we have to make a hybrid iso.

    We will use the program isohybrid, from syslinux-utils.

    ```
    $ cp orig_image.iso hybrid.iso
    $ isohybrid hybrid.iso
    ```

4. Now to flash the disk. We will use the built-in utility `dd`. 

    ```
    dd if=[source file] of=[destination disk] bs=8M
    ```

    for example: 

    ```
    dd if=hybrid.iso of=/dev/sdd bs=8M
    ```

Thats it!

*Future note, you can also format the disk for filesystem use*

```
$ mkfs.ext3 /dev/sdbX
```