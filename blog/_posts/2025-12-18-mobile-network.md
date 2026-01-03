---
layout: post
title: Portable LAN
tags: networking
image:
  path: /blog/img/2025-12-18-mobile-network/overview.jpg
---

![overview](/blog/img/2025-12-18-mobile-network/overview.jpg)

I made a battery-powered LAN network setup to carry with me.

![](/blog/img/2025-12-18-mobile-network/randbeacon_use.jpg)

While working on my [randbeacon](https://github.com/starmaid/randbeacon) project, I wanted to manage my WLED setups at OpenSauce with an ethernet interface - so I could use my laptop's wireless card to connect to the venue's network. As you can see, the initial setup with this raspberry pi was a little clunky and annoying. The core parts are there, a usb-ethernet adapter and a phone charging battery pack. I tried carrying this around outside while getting photos for that project, and it was the worst.

The core is a RPi3 running [OpenWRT](openwrt.org), a fast and straightforward network router firmware. I also picked up a Gigabit network switch, which is throttled by the RPi3's 10/100 ethernet port - but this isn't primarily for speed, this is for when nothing else would work.

Another critical piece is that the switch is powered off 5V DC. This way I was able to make a dead simple cable that connects to a phone charger battery, which is way easier to integrate into a project than naked Lithium batteries and charge controllers. Regulating voltage is annoying, and more expensive anyway if the usecase doesn't call for extreme current draw.

| Part | Cost |
| --- | --- |
| Raspberry Pi 3B+ | Basically free at this point |
| [TP-Link TL-SG105 Switch](https://www.amazon.com/dp/B00A128S24) | $13 |
| [Anker Power Bank "PowerCore 10K"](https://www.amazon.com/dp/B0D5CLSMFB) | $21 (used) | 
| Two scrap sheets of 1/4" Acrylic | $2 |
| Handfull of zip ties | Free |
| Cannabalized USB cable | Free |

The acrylic was scrap cutoffs from TAP plastics here in the bay area. They go for a dollar a sheet and are great value if the stuff you are making is small. I did round the corners and cut some holes, so the QL laser cutter came in handy again.

![](/blog/img/2025-12-18-mobile-network/in_bag.jpg)

*This setup fits perfectly in a backpack.* 

Another good thing to know is battery life. Mathematically, the 10 Ah pack could provide about 3 hours and 20 minutes of operation for the rated max of 2.5A (RPI 3B+) + 0.46A (Switch). In my own test of letting everything idle, the battery lasts about 12 hours. With these bounds I know the rough capacity and I'm pretty happy with this.