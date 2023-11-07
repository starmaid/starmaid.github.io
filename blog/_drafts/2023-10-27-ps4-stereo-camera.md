---
layout: post
title: PS4EYE Stereo Camera
tags: ps4eye, stereo, opencv
---

![picture of the camera sitting on my desk]()

Written October 2023

## Quick Intro

In 2021 I found a strange device in a box labeled 'free' sitting on the curb. That device turned out to be a `CUH-ZEY1` PlayStation 4 Camera. This is a pair of 1280x720@30fps cameras with a hardware-synchronized shutter, a microphone, and an encoder board.

I tried to use this camera. I fumbled about in 2021, didn't really understand anything, and gave up. I came back to it this month after learning OpenCV for stereo vision at work. This is a record of information I learned.

### Research

As I started lining up usernames in the availible research, [Antonio José Ramos Márquez "bigboss"](https://psxdev.github.io/index.html) was the primary force in documenting this camera's software. Antonio documented things here: 
- [Part 1: (2014, updated) initial hardware reverse, linux with libusb](https://psxdev.github.io/luke.html) 
- [Part 2: (2016) Windows driver development](https://psxdev.github.io/luke2.html)
- [A blogspot post about similar stuff to part 1, on mac](http://bigboss-eyetoy.blogspot.com/2015/02/reversing-playstation-4-camera.html)

The rest of the ps4eye group recorded things on [a group Tumblr blog, which includes the rewiring](https://ps4eye.tumblr.com/)

Sieuwe Elferink "sieuwe1" used this work to make his [instrutables](https://www.instructables.com/HACK-PlayStation-4-Cam-Into-Cheap-3D-Depth-Camera-/), [youtube](https://www.youtube.com/watch?v=c7CF6eDC0_A), and [github](https://github.com/sieuwe1/PS4-eye-camera-for-linux-with-python-and-OpenCV) tutorials later. On his github he credits the original group. I find myself frustrated with the clickbaity appearance of his content. I also find it less genuine. However, it is easily found when searching on the internet, and gets more traffic as it ony goes as deep as it needs to to get things running. 

## Hardware Hack

First you need to connect the camera to your computer.

Option 1 is to [order a custom PCB that @alvaroprieto designed.](https://oshpark.com/shared_projects/0PjWmdWL) You will need to purchase the USB and PS4AUX connectors separately.

Option 2, which was the one I did, was to cut off the Sony-proprietary 'AUX' connector on the cable and solder it to a USB-A 3.0 cable. Just connect the cables to the same colors if your replacement cable follows spec. USB3 Standard is as follows, note that the AUX connector does not use the USB2.0 fallback pins:

|  Pin |	Name 	    | Direction |	Color |	Description | Used in PS4Eye? |
| ---  | ---			| ---	| ---	    | 		---		            | --- |
|  1 	|   VBUS     	|   	| red   	| +5 V power                | Y |
|  2 	|   D- 	        | ←→ 	| white 	| USB 2.0 Data -            | N |
|  3 	|   D+ 	        | ←→ 	| green 	| USB 2.0 Data +            | N |
|  4 	|   GND      	|   	| black 	| Ground                    |Y |
|  5 	|   StdA_SSRX- 	| ← 	| blue  	| SuperSpeed receiver       | Y |
|  6 	|   StdA_SSRX+ 	| ← 	| yellow 	| SuperSpeed receiver       | Y |
|  7 	|   GND_DRAIN 	|   	| ground 	| Ground                    | N |
|  8 	|   StdA_SSTX- 	| → 	| purple 	| SuperSpeed transmitter    | Y |
|  9 	|   StdA_SSTX+ 	| → 	| orange 	| SuperSpeed transmitter    | Y |

## Installing on Windows:

Download [LibUSBk bin folder](https://sourceforge.net/projects/libusbk/files/libusbK-release/3.0.7.0/)

Clone Antonio's [OrbisEyeCam git repo](https://github.com/psxdev/OrbisEyeCam/tree/master)

1. (Once) Run `libusbK-inf-wizard.exe` and follow the instructions [here](https://psxdev.github.io/luke2.html).
    - Page 1: Select the WinUsb kernel driver
    - Page 2: Select the device labeled "USB Boot"
    - Page 3: Use the devault values.
    - Page 4: Save wherever.
    - Finish the wizard.
2. (Once) Run `InstallDriver.exe` from OrbisEyeCam

### Each time you power on the camera

1. Run `OrbisEyeCameraFirmwareLoader.exe`
    - When the PLC board is first powered on, it goes into bootloader mode and waits for the device to load firmware onto it. The firmwareloader program does this.


### To get data

Windows driver camera apps will show each frame weirdly, like this:

![windows picture of ps4cam]()

Don't worry about it. See near the end of [this page](https://psxdev.github.io/luke2.html) what each section of data is. 

From here, I would just go straight to OpenCV. They have many tools for dealing with video streams quickly. sieuwe1's [Github](https://github.com/sieuwe1/PS4-eye-camera-for-linux-with-python-and-OpenCV/tree/main) contains good examples. You should be able to just run the viewer code.

I wrote more code for trying to calibrate the camera, but its nothing special. [You can see it on my github.]()

I also wrote a parser in VVVV, which I was using back in 2021.

### My Experience

For some reason, my experience was not the same as sieuwe1. The exposure was different between sensors, they were too noisy, or something else was going wrong. I could not get the stereo vision to work. I tried tuning every parameter, different solvers.

Thus, I gave up and bought a used Intel Realsense camera. More on that later.


## Other platforms

Other platforms were documented in a more centrallized manor.

For Linux, follow instructions in the [ps4eye github](https://github.com/ps4eye/ps4eye)

For Mac (made for the 2013-2016 OSX Mavericks, but probably works for more), use the reference driver Antonio wrote [in this github repo](https://github.com/bigboss-ps3dev/PS4EYECam)