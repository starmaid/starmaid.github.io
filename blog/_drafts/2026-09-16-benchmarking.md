

This was a fun little side project that helped distract me while I was workign on [the protogen head]({ link ./2026-09-29-protogen.md }).

![Screenshot of a computer running a command line program]

## Problem

I have a large collection of single-board computers (SBCs) I have acquired over the years. The large majority are Raspberry Pi 3Bs, and the random Raspberry Pi 4 and NVidia Jetson Nano have clear performance improvements over the base model 3B. I then came into posession of several random other devices. These did not have clear comparisions, and some were even x86 instead of ARM. I no longer knew which was better.

![picture of some SBCs]()

I have been having issues with the RPI 3B running my Homeassistant server for a little while. It is fine 90% of the time, but updates will normally cause the whole system to lock up for 20-30 minutes at a time. Also annoying is that the ESPHome integration does not work well. Attempting to compile a hex file for an ESP32 maxes out the memory on the 1GB device. I first attempted to add swap, and this worked for a while! Definitely a good year of extra functionality. 

![photo of an esp32 in my house somewhere]()

However, at some point my server's memory footprint grew and attempting to compile in ESPHome would try to move the entire Homeassistant into swap, and it would crash. Then it would come back a few minutes later, and the compilation was failed. I would use the ESPHome docker container on my PC to flash new devices, and then copy the YAML fles into the Homeassistant integration for safe keeping.

![screenshot of the HA documentation changing to show the RPI is sucks]()

When I started to look into it, I found that in April 2025, the [Raspberry Pi 3 was explicitly defined as insufficient](https://github.com/home-assistant/home-assistant.io/commit/74d9ca828b3921a1d6bf81378e0c9c73802e0728) and I even saw it in some release notes at some point. I had already planted the seed of needing to replace it, but didn't know what with.

## Solution

Obviously the solution would lie in the form of one of my newly acquired SBCs. The question was which one, and would it even be better? I needed to benchmark the performance and statistics of each new computer so I could select the one that would be best for running HA as a dedicated box. I didn't want something overspecced (leaving performance on the table), and I didn't want something that was no better, or even slower than the RPI 3B.

### The Stupid Way

I initially thought I could just write some stupid python program and be done. But I realized this was silly. There have to be tons of professional benchmarking tools out there!

### The Smart Way

I went hunting for a benchmarking suite. I pretty quickly found [Phoronix Test Suite](https://www.phoronix-test-suite.com/), which has a bunch of pre-made benchmarking suites and even publicly uploaded results to compare your hardware to. This was exactly what I was looking for, and was able to give a picture of real-world performance for various workloads. I started cooking up a nix flake to easily load and run tests, because pretty much every system I was using was running NixOS and I like developing for it.

This quickly turned into a nightmare. Phorinix Test Suite (PTS) has a bunch of dependencies on Ubuntu specifically, and it also tries to be smart and install its own dependencies. Both of these are terrible to do on NixOS, which does not make system libraries availible and will fight applications that attempt to install additional things into their environment. I tried getting away with an [FHS environment](https://discourse.nixos.org/t/flakes-way-of-creating-a-fhs-environment/20821) to run my application in, but I still had to provide a million dependencies, and these dependencies seemed to change per-test as each had their own setup and teardown scripts that were just written with no consideration for maintanability.

```

```

I decided to just limit scope and do two tests. The linux kernel compilation and t

I got it running on my M4 Macbook Pro for work, and my Surface Pro 8. It took a few minutes but got running fine. A nice plus of this approach was that I could have a single flake command and it would pull from a public github, so I just had to manually type in a single command. I tried this on a raspberry pi and...

![Picture of RPI sitting on workbench]()

I don't know what score it got on the benchmark. I don't know becuase downloading and building the flake was taking longer than 30 minutes!!!

I cancelled the command out of rage and went back to the drawing board.

### The Smarterer Way

I decided I literally just care about the amount of RAM, number of cores, and single core performance. And importantly, I wanted to do it so fast I didn't see any SBC start thermal throttling. 

A single c++ file. Run a couple different kinds of operations. Be done in less than 20 seconds. Thats all it takes. The flake loads instantly. Copy the output back to my server manually.

## Some Results

So after a week or so of testing, lets find out - which board should I use?

| Hardware | Cores | RAM | Runtime (s) |
| --- | --- | --- | --- |
| Raspberry Pi 3b | 4 | 890236 kB | 17.5603 |
| Raspberry Pi 4b | 4 | 1853444 kB | 13.3627 |
| [Minisforum Z83-F](https://minis-pc.com/product/minisforum-z83-f-mini-pc-windows-10-pro-processor-intel-atom-x5-z8350/) | 4 | 3934012 kB | 12.0969 |
| [Azulle Byte4](https://www.pcmag.com/reviews/azulle-byte4) | 4 | 3831368 kB | 7.97244 |
| [Macbook Pro 2020](https://support.apple.com/en-us/111339) | 8 | 16178416 kB | 7.28498 |
| same, but on darwin | | | 6.03218 |
| [Surface Pro 8 i5-1135G7](https://en.wikipedia.org/wiki/Surface_Pro_8) | 8 | 7960716 kB | 5.05076 |
| [My Desktop]({ link ./2022-02-17-the-setup-2.md }) | 12 | 32673592 kB | 4.61138 |
