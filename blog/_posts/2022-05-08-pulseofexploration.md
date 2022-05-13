---
layout: post
title: Pulse of Exploration
tags: Raspberry Pi, LED, lights
---

![](/blog/img/pulse/pic1.gif)

*Written in May 2022*

A fun decorative light that reacts when a downlink or uplink travels over the Deep Space Network. [View project on GitHub.](https://github.com/starmaid/pulseofexploration)

## Timeline

**Pre-2018**

- I saw the [ISS-Above project](http://www.issabove.com/), and it had an effect on me.

**July 2019**

- Was talking about the [Deep Space Network](https://en.wikipedia.org/wiki/NASA_Deep_Space_Network) with my friends on the Mars Helicopter team who went down to JPL.
- A friend brough up the [Pulse of Exploration](https://vimeo.com/93420747) while talking about visualizing data in cool and fun ways.
- Found a project blog post about polling DSN Now. (Can't find it anymore).

**Oct 2020**

- Remember these ideas while reading the sequel to [17776](https://www.sbnation.com/a/17776-football), [20020](https://www.sbnation.com/c/secret-base/21410129/20020).
- [Make a Discord bot to use in the server, DSNBot](https://github.com/starmaid/dsnbot). This bot polls from DSN on command from a user.

I continually updated DSNBot until mid 2021, adding new features and using it as a testing ground.

![dsnbot gif?](/blog/img/pulse/dsn.gif)

**August 2021**

- The [discord.py fiasco](https://gist.github.com/Rapptz/4a2f62751b9600a31a0d3c78100287f1) happens.

**October 2021**

- (I find out about discord.py) 
- I realize I cant have all my work dependent on a single framework.
- Remember the desire to make my own verison of the Pulse of Exploration.

## Design

I got the idea of using a single LED strip instead of a much more complex setp - this would be the core of the project, keeping everything simple and easily replicable.

### Requirements

- Conveys information from DSN
- Looks interesting
- Easy to build (no soldering?)
- Cheap to build (under $50?)
- Adaptable for many setups
- Extensible in the future for other uses

I believe I met all of the requirements.

### Build

![image of the pile of supplies](/blog/img/pulse/supplies.jpg)

I saw a good opportunity to refresh my knowledge of multithreading in Python, and it was basically textbook. Three threads (Lights, SequenceManager, and DSN) passing data around with an asynchronus queue.

My original plan was to use DSN polling code from DSNBot, but I had structured it in a method that didn't get me the data I wanted. I ended up rewriting most of it.

I knew I wanted to play custom animations on the sky section, but was not sure how I would store them. Until now, I control all my lights with sine curves and raw RGB values. I had a breakthrough about how to store a set of 1D frames efficiently, and how to edit them quickly - 2D images.

![](/blog/img/pulse/frame1.png)
![](/blog/img/pulse/frame2.png)

A second idea came when I realized the animations could be, in 2D, pixel art of the planets they represent.

![](/blog/img/pulse/Mars.png)

![](/blog/img/pulse/pic2.gif)

As for physical setup, I was thinking about 3D printing something. But I got lazy and tired, and just made it out of Dollar Tree Redi-Board. This is faster and more prototype-style than a full 3D print, and it gets the job done.

### Collaborate

I made sure to have the lighting patterns be the most extensible part of the code. Signals from DSN trigger these sequences, so in a display they will probably be the largest focus. The logic flow to put a set of colors on the lights is as follows:

1. A signal comes down from DSN with a shortname
2. That shortname is looked up in the `theme.json` file to find the associated location
3. That location is compared against availible classes in Lights.py
4. If a class exists, it is instantiated and run
4. If no class matches, the an image with that filename is looked up in the folder defined in `config.json`

```python
try:
    # Attempt to load the class from lights.py
    classname = getattr(lights,locname)
    newSequence = classname(self.lights, self.sky, ship=q.activeSignals[s])
    logging.debug('Found LightSequence class ', classname)
except AttributeError:
    # If that that class doesnt exist, load that image
    logging.debug('LightSequence Class not found. Loading image file')
    newSequence = lights.Img(self.lights, self.sky, 
            self.themeName,locname,ship=q.activeSignals[s])
```

This way, a user can specify exactly which sequence is triggered, and then has two options for that sequence - it can either be an image (easy for a user to make) or it could be a custom class.

The images, as an extra treat, I started with pixel art of planets. Everyone loves a good pixel art, so its fun to promote and get people involved and looking at the project. Its also nice to get credit when its added to a wider theme pack!

To make a custom class, a dev just extends the *LightSequence* class and implement the `run()` function. This is the function that gets a single frame of lights. It is blocking, so the user does not have to interact with asynchronus weirdness.

I haven't fully thought of how to integrate new implementations of *LightSequence* into the main repository. For now, I expect most of the contributions to come as pictures instead of new code.

One thing I did not intend to be as flexible are the the transmission and ground. Those do some slightly more complex things, and I only implemented the bare minimum. Anything that another developer does will probably be an improvement and I'll just merge with master.

### Anticipated Problems

The cheapest build is not the easiest build. I'm pretty sure most Pi Zero W models don't come with pins soldered on. This means the user will have to solder to connect the lights to it. I might change the instructions to default use the 3B+ as the preferred version, so they can have a platform for other projects in the future - but have a simple to build option here.

There is currently (May 2022) a shortage of all Raspberry Pi computers.. 10x prices, and raiesd prices for the forseeable future. [This will affect the project completion rate I think.](https://img.ifunny.co/images/3cda13b1552639d8ec84701bdcb205179f6a4b143e1907bdf1fac2fbf843eac4_1.webp) 

## Future

![](/blog/img/pulse/pic3.gif)

I kind of want to put this project to rest. the DSN brainrot has lasted for almost two years, I want to move on. However, I would love for this project to get a little size and see what people do with it. I'll do whatever work is required to make it easy and fun for other people to build their own. Comments and issues on GitHub will decide the future of the project.

Thanks for reading.

