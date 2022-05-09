---
layout: post
title: Pulse of Exploration (mini)
tags: Raspberry Pi, LED, lights
---

[picture opf the lights]

## Timeline

Pre-2018

Is the ISS above me rn

July 2019

Found out abt them at a party or something briar maybe

Found a blog post

Oct 2020

Remember it while thinking about 17776

Make DSNBot

Continually update DSNBot


August 27, 2021

discord.py fiasco [](https://gist.github.com/Rapptz/4a2f62751b9600a31a0d3c78100287f1)

October 2021

(I find out about this) and realize I cant have all my work dependent on a single framework

Remember the desire to make my own mini pulse of exp


## Design

i wanted this to be something my friends could actually build. This would require minimal soldering or any physical work if possible. This makes a single line of LEDS make the most sense.

application where threading would be simple, and i always want more practice at this

kept my DSN code at the beginning but ended up rewriting it almost entirely

Had my breakthrough about how to efficiently store 1D pixel animations as images that would be pixel art of the planets

had more thoughts about collaboration. see the collaboration section

## Collaborate

First - the themes are collaborative

The themes are more than just playing the pictures, see this key line in the `main.py`:

```
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

A dev can extend the *LightSequence* class and a user can set a ship to trigger it in `theme.json` for programatically custom lights. I have moved most helpful functions in there so anyone has access.

the transmission and ground are a little less intentionally flexible, but thats because they do slightly more complex things. Sorry :/

## Future

I kind of want to put this project to rest. the DSN brainrot has lasted for almost two years, I want to move on. However, I would love for this project to get a little size and see what people do with it. I'll do whatever work is required to make it easy and fun for other people to build their own. 

Im mad about the RPI shortage. 10x prices, and raiesed prices for the forseeable future. this will affect the trout population

