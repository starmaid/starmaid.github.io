---
layout: post
title: Meshtastic Party
tags: meshtastic, radio, cat, catears
image:
  path: /blog/img/2024-12-14-meshtastic-party/6_party1.jpg
---

![Party selfie](/blog/img/2024-12-14-meshtastic-party/6_party1.jpg)

I like to have interesting parties on my birthday because I can manipulate my friends into doing weird things. 2022 was Maid Skating, 2023 was the Beat Saber head-to-head. This year, I found myself in the mood to get more people into radio. I think I had a conversation with my brother when he was in town (he was learning how to use SDR) and in a blast of inspiration I came up with the idea for a game!

## System Tests

The first thing I had to do was establish what the radios were even capable of. This would become the basis for the ruleset.

![picture of tim here](/blog/img/2024-12-14-meshtastic-party/1_tim.jpg)

### Peer to Peer Only

I had my brother hold a radio in his jacket pocket. I held the radio in mine. We walked around Palo Alto, and basically as soon as we lost line of sight we lost signal. On street intersections, we could get reception if we faced each other - even our bodies were attenuating the signal enough that it wasn't getting through. If we held the radios above our heads, we could get slightly better results - but even having your hand near the antenna would reduce the effectiveness, and also you look kind of like an idiot.

![picture of head mount](/blog/img/2024-12-14-meshtastic-party/2_design.jpg)

### Head mounted with base station

The question would be - how do you get the antenna above your head? I entertained asking everyone to wear a hat, and having the radios clip onto the band, or elastics, or something. But then, like a lightning strike, I realized there was only one solution. I could make cat ears for them. This was something I already had a design for, but it was made in Autodesk Inventor - and I had to remake it from scratch in FreeCAD. Learning B-splines was a trip and took several hours.

![picture of base station](/blog/img/2024-12-14-meshtastic-party/3_basestation.jpg)

For base station, I wanted to get something above the roof of my apartment - and had some brainstorming about it. I settled on battery power, so I didn't have to run antenna, DC, or really, any cables up to the top of my tower. I also bought higher-gain tuned antennae for these base stations, because many people suggested upgrading the ones that come with the Heltec. The PVC is just taped to a camera tripod with gaff tape. Simple, straightforward, cheap, and I put a little sign that says to call me if anyone has trouble. 

![](/blog/img/2024-12-14-meshtastic-party/5_tower.jpg)

With these two setups, I started wandering around Palo Alto. I was able to get several blocks away before the tall buildings downtown started blocking my signal - and as soon as I went up on a parking garage, I was able to get an incredibly strong signal! I also realized I had full connection to the bay area mesh from there, which I didn't expect. I had a bunch of trouble in the past, but with the new vantage point I think it was just better in all ways.

## The Game

So after figuring out what kind of capabilities we had:
- Good connection to a base station inside our neighborhood
- Semi-frequent positional updates more than once per minute
- Line-of-sight detection of other radios with RSSI
- Cheap enough radios I could buy a bunch

I had to think up a game. I thought about having battery-powered target radios placed in various locations in the town, but I got worried about that either being too easy, or someone tampering with the radios. This meant that all radios would have to be on the move...should we play capture the flag with anonymous teams? No, I don't want people running, or anything super fast-paced.

I settled on a simple game - two people have their GPS turned off, and are trying not to be found. Two teams then compete to find them. The targets get a head start, and there is a time limit.

The modifiable parameters are the head start duration, the map size, and the game duration. Those give me a good amount of levers to pull to change the balance in favor of the targets or the teams. This also makes the game variable and interesting in different geographical areas, if I ever wanted to play it again.

As a baseline for range, I kept things inside a 20-minute walk. This way, you could go to the furthest corner and then come back without being gone for more than 45 minutes. Its cold in December, and people get tired after walking around. I don't want the game to last too long.

**Timing:**
- 10 minutes TARGET HEAD START
- 20 minutes GAME
- 15 minutes RETURN TO APARTMENT

**Capturing a Target:**
- You can’t see them on the map, but you can see their node’s signal strength.
- You can’t run, so you have to pac-man this shit
- Two team members can trap a player (identifiable by their cat ears) on a road, covering both exits. They can then ask “Are you the target” and you have to tell the truth.

**Basic Rules:**
- No running please. Its dark.
- Stay on sidewalks, cross at corners.
- No trespassing. cmon
- Don’t fuck with the radio settings
- NO USING OTHER MEANS OF COMMUNICATION. that would be too easy.

![alt text](/blog/img/2024-12-14-meshtastic-party/image.png)

### Equipment

I was trying to think of the easiest way to get a radio in everyone's hands, or at least one radio per two people (depending on how many show up). Adding a battery to the radio would increase the cost, and require soldering on every kit. I knew people would need to install the meshtastic app, and using their phone battery would be a great way to avoid more setup on my side. I also wanted GPS, but luckily you can send the user's phone GPS location over the mesh - again, very simple.

![](/blog/img/2024-12-14-meshtastic-party/4_spread.jpg)

This is everything that I used during the party.

|   Item    |   Qty.  |   I paid...    |
|   ---     |   ---   |   ---     |
| Heltec LoRa v3.1 (bought in March) | 2 | $65 for 2 |
| [Heltec LoRa v3.2](https://www.amazon.com/dp/B076MSLFC9) | 10 | $24/pc |
| (Assorted USB C-C Data Cables) | 10 | ~ $2/pc
| [915MHz LoRa Antenna](https://www.amazon.com/dp/B0CTXL61LY) | 2 | $10 for 2 |
| [2Pos Switch](https://www.amazon.com/dp/B06XFXWLJP) | 2 | $10 for 100 |
| Lipo Batteries I got from Vee | 2 | $0 |
| 3D Prints | a bunch | not much |
| PVC Pipes for mounting base stations | 2 | $10 |

So the Heltec [v3.1 and v3.2 revision](https://docs.heltec.org/en/node/esp32/wifi_lora_32/hardware_update_log.html) did improve things, and I did notice slightly better range out of the update + new antenna. But I would be remiss to not use all the hardware I had, so I gave the targets the two worse radios (maybe would make them harder to track?)

The batteries, switches, and antennae were used in assembling the base stations. The Heltec boards have LiPo charging circuits so thats super handy. They are now good to use as my own personal mobile devices, and I connected over bluetooth while everyone else had to use a cable.

### Software Setup

Basic setup involved setting the region, ID, primary and secondary channel for each radio. While I was doing the testing, I got onto the rest of the mesh - which was cool for me, but meant that LongFast was full of messages, and everyone would be able to hear whatever bs was happening at my birthday party. 

I also wanted to share GPS with only the secondary channel - which seems to be impossible. The primary channel is where all GPS gets sent. This lead me to set a new primary channel, which simplified a lot of the rest of it.

I set a primary channel called `ST4R-GEN`, and then each team got their own secondary channel `ST4R-BLU` and `ST4R-RED`. The target users got both secondary channels, just for fun. That way they could talk smack or just lurk and get intel.

The android app needed quick setup to enable sending GPS, but that was it. It was basically plug and play, because I had already set all the names and channels.

To help me make data visualizations, I also had everyone install GPS tracking apps on their phone. This would get higher frequency data than the meshtastic app was sending, and also would fill in gaps if they left the coverage zone from the beacons.

### Fun Accomodations

Due to some social reasons, I had some people who I wanted to join my party, but would not be able to hang out in the apartment. I was able to hand them the radios and give the orientation slightly ahead of time, only to be thwarted by the antenna SMA cable disconnecting and having to meet them after the start of the game anyway. Even with that, I think it was a fun way to involve some people who wouldn't have otherwise been able to attend the party.

## During the Party

At 7pm, after dinner arrived, I put an orientation powerpoint on the screen. I made it a combination of funny and informative, and also [Signalis](https://rose-engine.org/signalis/) themed. 

![some pictures from the powerpoint](/blog/img/2024-12-14-meshtastic-party/image-1.png)

I handed out the radios, and most people got right set up! An unforseen hiccup was that the usb cable for connecting meshtastic didn't seem to work on iphone. I then tried to get the bluetooth working, and that didn't work either. There was probably some kind of stupid 'security' feature or developer mode I had to enable to get the app to work, and I had not researched it ahead of time. Sorry iphone users. Not really though. of the 14 or so people at the party, only 2 had iphones. One user had an android phone that could not act as a host device, so that didn't work either. I had a spare phone with meshtastic loaded, so I was able to loan one out. The rest had to just buddy up with someone.

The first game began - I was a little drunk, so I accidentally gave the targets some extra head start time (by forgetting to tell everyone when it was time to leave). Then, everyone hopped the fence and started the game. I stayed at home with my second beacon device, which could hear the main beacon mounted above my apartment so I could monitor the conversations and see everyone (except the targets). 

![screenshots of texting]()

The time passed quickly, and I told everyone connected to the mesh to come home. Unfortunately, the targets both had left the range of the beacon - which made them harder to track, but also unable to hear my message. I texted them shortly after, but they were left out in the cold for a little longer than I had intended.

![ian meowing video]()

Neither of the targets were found in game 1! Reports from the field revealed that the play area was simply too large for the time allotted. I didn't want people to be walking for longer durations, so I decided to shrink the play area by about a third.

This time, I was a little better on my timings, and I also decided to go out hunting with my beacon radio that had slightly better receive gain than the teams. It was fun to wander around at night, with everyone wearing their cat ears. I hope people walking around on that Saturday night noticed something funny going on. 

![capture image](/blog/img/2024-12-14-meshtastic-party/8_capture.jpg)

I was with RED team when they managed to capture one of the targets! I didn't even help them, even though I actually spotted it first (with my eyes!). If you get an RSSI at all from a target, it was a good strategy to basically start looking down streets when you pass by corners.

## Processing



note to self: can we scrib exif data from all photos here???


exiftool -gps:all= -r -overwrite_original -ext jpg png .
