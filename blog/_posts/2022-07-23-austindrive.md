---
layout: post
title: Austindrive Custom Overdrive Pedal
tags: music, guitar, live
image:
  path: /blog/img/2022-07-23-austindrive/austindrive.jpg
---

![picture of the finished pedal](/blog/img/2022-07-23-austindrive/austindrive.jpg)

*This post was started in 2022, but 90% of it was written in fall 2026. So its a bit fuzzy!*

## Reference Links

- [Austin Microphones Homepage](https://www.austinmics.com/)
- [Buy this kit!](https://www.austinmics.com/guitar-pedal-kits)
- [Rick's Instagram](https://www.instagram.com/thehotholder/)
- [Austindrive Build Guide](https://e59a8872-c4c4-46eb-a649-159b97a9eef1.filesusr.com/ugd/d079ee_e843424909ae41ad888d4d144d52723e.pdf)

## Setup

My dad's friend [Rick Wilkinson](https://www.instagram.com/thehotholder/) has been making DIY electronic kits for a while now. This means some fun prototypes once in a while, and this time I got an email about doing a test build of a new overdrive DIY kit. 

Rick mailed me the kit. The only preparation step was to paint the case, so I bought some spray paint and used the patio area of my brand new apartment. Finally, somewhere I could go outside and paint! The week between getting the package and doing the workshop apparently was the week I moved from Palo Alto to Redwood City. In my haze, I apparently didn't take any photos.

Random aside: going outside to spray the pedal case was actually the thing that brought a handful of fleas into my bedroom. This was due to the awful nature of my new patio, which was directly across a fence from the trash bins of the apartment next to ours. This meant that it smelled like garbage all the time, and also the presence of vermin meant the rug material that was put down was inundated with fleas. These hooked a ride on my legs into my apartment! That lasted for a month or two of neurotic vacuuming and wearing knee socks when home.

![trash world](/blog/img/2022-07-23-austindrive/trash_world.png)

## The Class

Anyway. The build class was fun. The kit was super easy to put together and I finished well-ahead of the class.

![soldering whee](/blog/img/2022-07-23-austindrive/soldering.gif)

The highlight is of course, picking the components to get your preferred tone. This requires picking up your guitar, plugging it in, and trying it out!

![playing mah geeta](/blog/img/2022-07-23-austindrive/playing.gif)

## My Build

I don't actually know what my original build was, because I've opened it back up a few times since. I wasn't super happy with it now as I type this post, so I decided to try a few more tones.

*Note that I am testing this directly into an audio interface - theres no interaction with the amp or anything, which is where some tone will come from.*

![my guitar](/blog/img/2022-07-23-austindrive/guitar.jpg)

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2427383181%3Fsecret_token%3Ds-2Pw0tCnFLE1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/st4rm41d" title="starmaid" target="_blank" style="color: #cccccc; text-decoration: none;">starmaid</a> · <a href="https://soundcloud.com/st4rm41d/clean-1/s-2Pw0tCnFLE1" title="Clean" target="_blank" style="color: #cccccc; text-decoration: none;">Clean</a></div>

Lets get a baseline of my guitar, clean, into the audio interface. I'm using the single coil bridge pickup and my volume and tone knobs are at full.

To keep this from getting too cluttered, heres the setup when I pulled it out of my bag of pedals

<div style="display: flex; gap: 10px;">
  <div style="flex: 1;">
    <img src="{{ '/blog/img/2022-07-23-austindrive/testing/setup_1.jpg' | relative_url }}" alt="Description 1" style="width: 100%;" />
  </div>
  <div style="flex: 1;">
    <img src="{{ '/blog/img/2022-07-23-austindrive/testing/setup_1_inside.jpg' | relative_url }}" alt="Description 2" style="width: 100%;" />
  </div>
</div>

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2427383184%3Fsecret_token%3Ds-bPYOVsai1QS&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/st4rm41d" title="starmaid" target="_blank" style="color: #cccccc; text-decoration: none;">starmaid</a> · <a href="https://soundcloud.com/st4rm41d/config-1-2/s-bPYOVsai1QS" title="Config 1" target="_blank" style="color: #cccccc; text-decoration: none;">Config 1</a></div>

It's a little muddy for my preferences. 

- Config 2: I removed the capacitor on stage 2
  - Improvement. I like more high frequency.
- Config 3: I swapped the stage 1 diodes from 1N914s to 1N4007
  - I didn't like how harsh, the distortion knob had to be really low to get good sound
- Config 4: I swapped from the TL072 op-amp to the 4558
  - I think it got a bit sharper here.
- Config 5+6: I increased both resistors from 6.7k ohm to 10k ohm
  - This made it a little easier to handle

<div style="display: flex; gap: 10px;">
  <div style="flex: 1;">
    <img src="{{ '/blog/img/2022-07-23-austindrive/testing/setup_4-5.jpg' | relative_url }}" alt="Description 1" style="width: 100%;" />
  </div>
  <div style="flex: 1;">
    <img src="{{ '/blog/img/2022-07-23-austindrive/testing/setup_5-6_inside.jpg' | relative_url }}" alt="Description 2" style="width: 100%;" />
  </div>
</div>

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2427383175%3Fsecret_token%3Ds-UCfhUAllJLT&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/st4rm41d" title="starmaid" target="_blank" style="color: #cccccc; text-decoration: none;">starmaid</a> · <a href="https://soundcloud.com/st4rm41d/config-5-6/s-UCfhUAllJLT" title="Config 5" target="_blank" style="color: #cccccc; text-decoration: none;">Config 5</a></div>

For giggles I turned the knobs all the way up to get Config 6.

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2427383193%3Fsecret_token%3Ds-1tkgoT4mpVY&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/st4rm41d" title="starmaid" target="_blank" style="color: #cccccc; text-decoration: none;">starmaid</a> · <a href="https://soundcloud.com/st4rm41d/config-6-7/s-1tkgoT4mpVY" title="Config 6" target="_blank" style="color: #cccccc; text-decoration: none;">Config 6</a></div>

This one is a little over the top. Probably won't need to use that one in any real context.

## Magic Pedal

This was a little side project to avoid spending $25 on a [Fender 1-button footswitch](https://www.guitarcenter.com/Fender/1-Button-Footswitch-for-Mustang-and-Blues-Junior-Amps-Black-1290447864189.gc) 

![the magic pedal](/blog/img/2022-07-23-austindrive/magic_pedal.jpg)

This build is left as an exercise to the reader. 

## Gravelroad Switch Covers

My dad's friend Stefan Zillioux and his blues band [Gravelroad](https://www.youtube.com/watch?v=WX1MmZrs29A) had some big "gorrilas wearing sunglasses" iconography for their album at the time, and my dad asked me to model some switch covers using their cover. I threw together a few options, printed them, and tested them on the only pedal I had - the Austindrive.

![gravelroad pedal](/blog/img/2022-07-23-austindrive/gorillas.png)

Anyway thats a bunch of random stuff I did in late 2022.