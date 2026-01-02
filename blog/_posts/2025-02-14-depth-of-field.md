---
layout: post
title: Depth of Field
tags: imaging, camera, realsense, opengl
image:
  path: /blog/img/2025-02-14-depth-of-field/3_pen.gif
---

![gif of the pen](/blog/img/2025-02-14-depth-of-field/3_pen.gif)

*Treating the real world like a video game.* [Code here.](https://github.com/starmaid/depth-of-field-cpp)

## Introduction

Narrow depth of field is cool. Nothing says production quality like a beautiful bokeh! I got my first film camera, a DIY twin reflex with some cheap acrylic lenses, and realized how nice a camera can look. I wanted to learn how I could modify the camera, change the optical characteristics, and get different results. I had a great time playing with the various lenses on 3D printed rail mounts.

However, eventually I wanted to actually take good photos, and good video. You start hitting $10,000 pretty quickly for a fast lens and a good sensor. I am not really a photographer, and I don't even use my specialty cameras (only in the hundreds of dollars) that much! I used to carry around a point and shoot, but these days I can't really justify it. Phone cameras are too good, and always on me.

Something happened while watching these two videos back to back:

{% include youtube_embed.html id="-4uzyhbDFas" %}

{% include youtube_embed.html id="v9x_50czf-4" %}

I immediately realized that my Intel RealSense would be able to create SOME amount of depth of field! All I had to do was treat the real world like it was a video game! As far as I can tell, nobody has ever tried this.

![random one](/blog/img/2025-02-14-depth-of-field/6_computers.gif)

## Implementation

### Stuff that Didn't Work

*January 2024*

I first loaded up pyrealsense and started trying to run a gaussian blur. Then I realized it was super slow, so I wanted to use a shader. Then I considered going over to WebGL, because I wanted to learn how to use that also. Then I had trouble streaming video into WebGL, so I had a whole sidequest about GStreamer and FFmpeg. Then I gave up on the streaming and decided to try OpenGL in c++.

### Final Implementation

*February 2024*

Librealsense2 and OpenGL. I used GLEW to load the extensions, and GLFW to create and manage windows and inputs. These seem to be fairly traditional, but getting everything building in Cmake was not trivial. I can write c++, but managing external libraries is always the hardest part.

[Acerola's example](https://github.com/GarrettGunnell/AcerolaFX/blob/main/Shaders/AcerolaFX_BokehBlur.fx), while the youtube video was generic, was written in HLSL for DirectX. It would have been easy to rip off from him, but this would give me a bit of a chance to really understand OpenGL.

One big thing for me was understanding that OpenGL treats the GPU like a state machine - you set parameters, and then tell the GPU to do something. I basically followed along with a [tutorial website](https://learnopengl.com/Getting-started/Hello-Triangle) to get the basics down, then focused on the shaders section.

I ran into issues that I didnt understand and lost interest in the project.

*August 2024*

After some time, I learned a little more at my job and thought another look would help. I used renderdoc to help with debugging. I was having many issues with flipping the quad, the order of the corners, and such. Some things are just not very clear. But through trial and error, and a fresh set of eyes, I was able to make some more progress.

![screenshot of renderdoc?](/blog/img/2025-02-14-depth-of-field/renderdoc.png)

This was also when I got the first version of gaussian blur working.

*February 2025*

This project sat in my back burner for long enough. I had a new idea and wanted this to be done. I rescoped (told myself I would only add gaussian blur and some basic controls for taking photos) and attacked the project with renewed vigor. I worked out the last of the shader code and it actually started working!

![the bed one](/blog/img/2025-02-14-depth-of-field/2_depth_demo.gif)

I decided not to look into encoding video from my program. I'll do that another time. All my recordings are done with OBS Studio. I also did not feel like learning how to add sliders to the output window - all controls are keypresses.

And with that, things are complete!

![the camera setup](/blog/img/2025-02-14-depth-of-field/20250217_125617.jpg)

## Functionality

First - the realsense gives a 1280x720 depth stream at 30 fps. This is not exactly the highest resolution, but its nothing to laugh at. The depth filtering and smoothing algorithms also reduce this resolution on certain parts. The depth also has some minor hole filling and other algorithms that make the depth less accurate - this results in blocky, harsh transitions that might not line up with the pixels.

{% include youtube_embed.html id="F80fNMDXu4w" %}

The outdoor depth performance suprised me! You can get good looking footage at way further than the 10 meters advertised from Intel. Also, the lack of infrared in good lighting conditions wasn't noticeably worse than the indoor stuff.

The realsense camera is effectively a pretty good webcam. The dynamic range is okay, and the low light performance is not that great. There is also a bit of motion blur when trying to take still images in low light, obviously.

![](/blog/img/2025-02-14-depth-of-field/9_me_static.png)

Gaussian blur only, even three passes, is just not that good. It lacks character, but it gets the idea across.

![The piano one](/blog/img/2025-02-14-depth-of-field/5_piano.gif)

I sacrificed all the other effects - bokeh, tonemapping, and other techniques, in order to complete this project and be done. Someone else can fork my code and finish it if they want it to look even better.

The algorithm struggles on all things that depth cameras struggle on - thin objects like hair, leaves, and cables, for example, are either lost completely or bring many pixels of the background into focus. Absorptive and even slightly reflective objects don't work.

For the good things, pulling focus has a really weird and jarring look that looks really artificial. The image doesn't breathe at all - things just come into focus. It looks almost like scanning a room, like a video game effect. The blockiness also adds to this digital, glitchy look. Good thing I like cyberpunk aesthetics.

![](/blog/img/2025-02-14-depth-of-field/8_lucyforeground.png)

The result is always very dreamlike, I frequently percieve my dreams as being out of focus - or only the important thing is in focus. Its hard to read text sometimes. This effect can recreate it.

![me on the bed](/blog/img/2025-02-14-depth-of-field/1_bed_static.gif)

Again, thanks for reading. I'm just glad this project is done. Oh and happy valentines day!