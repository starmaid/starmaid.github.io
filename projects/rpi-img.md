---
layout: post
title: Imaging the Raspberry Pi OS
tags: raspberrypi raspbian os linux image
---

Written 11/3/2019

This is my process for making an image of any Raspberry Pi OS to distribute to other people, or keep as a stable backup for yourself later. I know theres some tool for distro building, but I like the simplicity of this method. 

**NOTE:** The size of the disk you are imaging is the smallest you will be able to copy it onto. We are doing a byte-for-byte copy of the drive including the allocation tables.

1. Grab a fresh copy of Raspberry Pi OS, or literally anything else. Load it in your RPI and make it how you want it.

2. If you want, when you're done you can clear your terminal history with `$ history -r`. Power off the RPI and remove the SD card.

3. Now move over to another computer running linux. I'm using debian for this. Connect the SD card you are imaging to this computer.

4. Sometimes your OS will automatically mount the drive for accesing the files. Use

    ```
    $ lsblk
    ```

    to make sure that the SD card doesn't have any mountpoint. 

    if it was mounted, unmount all mounted partitions.

    ```
    $ umount /dev/sdxX
    ```

    (replace sdxX with whatever the volume was assigned)

5. Now we will copy the SD card into a compressed disk image file

    we are copying the disk, not a partition on the disk, so 'sdx' will not be followed by a number. The `status=progress` flag will give some "is this still working?" kind of information, but you dont get a remaining time or anything.

    ```
    $ sudo dd if=/dev/sdx conv=sync,noerror status=progress bs=64K | gzip -c > [path to resulting file].img.gz
    ```

    If you have pv (pipe viewer) installed and want a fun progress bar, you can pipe it through there (removing the `status=progress` flag). However, you will have to give pv the approximate size of the disk you are copying. 
    
    ```
    $ sudo dd if=/dev/sdx conv=sync,noerror bs=64K | pv -s [Size of disk][units] | gzip -c > [path to resulting file].img.gz
    ```

    For example, I would use:

    ```
    $ sudo dd if=/dev/sdc conv=sync,noerror bs=64K | pv -s 7400M | gzip -c > ~/disk_image.img.gz
    ```

    You can play with the blocksize if you want but 64K has never given me any problems.

That compressed file now has your image in it. You can use your own image flashing workflow as normal with that file.