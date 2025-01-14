---
layout: post
title: Wii Sensor Bar
tags: wii, nintendo, gaming
image:
  path: /blog/img/2025-01-11-wii-sensor-bar/1.png
---

![Gif of the light turning on](/blog/img/2025-01-11-wii-sensor-bar/GIF%201-13-2025%2023-42-02.gif)

Really quick one here at the beginning of 2025. I have a simple problem - I have a Wii, and I use a projector in my living room. The projector requires all my AV stuff to be at the back of the room (or use crazy long cables, etc). For audio, I have a nice bluetooth speaker at the front - this kicks ass. But with the Wii, the sensor bar cable is not long enough. 

![](/blog/img/2025-01-11-wii-sensor-bar/1.png)

So turns out that the Wii "Sensor Bar" is just two groups of IR LEDs that are then sensed by the remote - there are no active electronics. Here I used my Intel Realsense (which has two IR imagers) to take a look through the filters on the Wii device. There are 5 small bulbs inside, with the outer two pointed at 45 degrees outward.

![Picture of the realsense LEDs](/blog/img/2025-01-11-wii-sensor-bar/Screenshot%202025-01-13%20234844.png)

This also means theres no need to link the bar to the Wii. This is so simple that people even commonly use [two candles as a makeshift device](https://duckduckgo.com/?t=ffab&q=wii+candle+sensor+bar&iax=images&ia=images). You can also, more elegantly, use some IR LEDs.

Thanks to nefarious circumstances, some of my friends got me a set of the right diodes for the job for my birthday!

I used the new [FreeCAD version 1.0.0](https://www.freecad.org/) (seriously, if you are a post-college engineer, check this new release out - they fixed my major problem with it) to quickly model a little case for the four bulbs. Throw a USB-C port on there, some resistors, and slop some hot glue all over it and were done!

![picture of it done](/blog/img/2025-01-11-wii-sensor-bar/Screenshot%202025-01-13%20235755.png)

Its not as bright as the Wii one, but it works just fine.

![Comparision of wii vs mine](/blog/img/2025-01-11-wii-sensor-bar/GIF%201-13-2025%2023-43-44.gif)

![video of it working](/blog/img/2025-01-11-wii-sensor-bar/GIF%201-14-2025%2000-08-18.gif)

Funny, I found out my string lights also are visible when on the highest sensitivity setting for the Wiimotes.

![String lights](/blog/img/2025-01-11-wii-sensor-bar/GIF%201-14-2025%2000-11-21.gif)

Anyway, this was a good quick project to do at the start of the year.