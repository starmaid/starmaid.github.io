---
layout: post
title: Meshtastic Party
tags: meshtastic, radio, cat, catears
image:
  path: /blog/img/2025-01-11-wii-sensor-bar/1.png
---

![Party selfie]()

I like to have interesting parties on my birthday because I can manipulate my friends into doing weird things. 2022 was Maid Skating, 2023 was the Beat Saber head-to-head. I found myself in the mood to get more people using meshtastic. I think I had a conversation with my brother when he was in town (he was learning how to use SDR) and in a blast of inspiration I came up with the idea for a game!

## System Tests

The first thing I had to do was establish what the radios were even capable of. This would become the basis for the ruleset.

![picture of tim here]()

### Peer to Peer Only

I had my brother hold a radio in his jacket pocket. I held the radio in mine. We walked around Palo Alto, and basically as soon as we lost line of sight we lost signal. On street intersections, we could get reception if we faced each other - even our bodies were attenuating the signal enough that it wasn't getting through. If we held the radios above our heads, we could get slightly better results - but even having your hand near the antenna would reduce the effectiveness, and also you look kind of like an idiot.

![picture of head mount]()

### Head mounted with base station

The question would be - how do you get the antenna above your head? I entertained asking everyone to wear a hat, and having the radios clip onto the band, or elastics, or something. But then, like a lightning strike, I realized there was only one solution. I could make cat ears for them. This was something I already had a design for, but it was made in Autodesk Inventor - and I had to remake it from scratch in FreeCAD. Learning B-splines was a trip and took several hours.

![picture of base station]()

For base station, I wanted to get something above the roof of my apartment - and had some brainstorming about it. I settled on battery power, so I didn't have to run antenna, DC, or really, any cables up to the top of my tower. I also bought higher-gain tuned antennae for these base stations, because many people suggested upgrading the ones that come with the Heltec. The PVC is just taped to a camera tripod with gaff tape. Simple, straightforward, cheap, and I put a little sign that says to call me if anyone has trouble. 

With these two setups, I started wandering around Palo Alto. I was able to get several blocks away before the tall buildings downtown started blocking my signal - and as soon as I went up on a parking garage, I was able to get an incredibly strong signal! I also realized I had full connection to the bay area mesh from there, which I didn't expect. I had a bunch of trouble in the past, but with the new vantage point I think it was just better in all ways.

## Game Rules

Talk about game rules

## Equipment

Table for all equipment

|   Item    |   Qty.  |   I paid...    |
|   ---     |   ---   |   ---     |
| [3D printed case (0.04 kg)](https://www.thingiverse.com/thing:5989952) | 1 | $1 |
| [Arduino Pro Micro](https://www.amazon.com/dp/B08THVMQ46) | 1 | $7
| [B10K Potentiometer](https://www.amazon.com/dp/B07VQTFFGC) | 8 | $5 |
| (optional stuff below) | --- | --- |
| [USB Type C Female Connector](https://www.amazon.com/dp/B091CRLJM2) | 1 | $1 |
| Mico-USB Male Connector | 1 | --- |
| 5V LED | 1 | --- |
| 200 Ohm Resistor | 1 | --- |