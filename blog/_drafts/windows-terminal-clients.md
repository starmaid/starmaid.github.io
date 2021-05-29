---
layout: post
title: Windows Terminal Clients
tags: blog windows terminal powershell "command prompt"
---

This post will be a formalized set of musings I have had over the past several years about various command line utilities in the Windows 10 operating system. I could make an entirely separate post detailing why I am using Windows in the first place, but this is simply not the time. Everyone has reasons to use one OS over another, and this conversation of terminals happens after that descision is made.

The Unix shell, and the various terminals that can be used to access it, is the purest, rawest interaction a human can have easily with a computer. You could [bitbash a TTY connection over serial from an arduino](https://www.youtube.com/watch?v=2XLZ4Z8LpEE), or [write machine code onto a ROM chip](https://www.youtube.com/watch?v=LnzuMJLZRdU) with a 555 timer and two buttons, but I'm talking about real things. You can [open up a TTY session on any linux machine with ctrl+alt+FX](https://www.howtogeek.com/428174/what-is-a-tty-on-linux-and-how-to-use-the-tty-command/) if you dont want to mess with any emulators. But realistically, we want some form of terminal emulation that gives us some extra tools, some visual customization, and usability that ensures real productivity.

There are also [many third-party terminal emulators for Windows](https://www.slant.co/topics/1552/~best-terminal-emulators-for-windows) that people love to argue about as much as people on the internet like to argue about anything. I'm just going to focus on the built-in emulators that will be on any computer you sit down at. 

## Windows Command Prompt

Developed by Therese Stowell in 1987, `cmd.exe` was developed to replace DOS's `command.com` for the Windows NT family. There are 45 built-in commands, as essential to the windows experience as any. 

*"we aren't in unix anymore, toto"*

The biggest upside of using the Command Prompt is just the classic feel, and the closeness it feels to the windows base. As all those "ls is not recognized" memes go, it really is unapolagetically itself. You have all your `$PATH` variables just as you expect them, which is great when installing your Python versions or other programs.

However, its not the best. There is no easy way to open directly to a desired folder you have open already, which is something I want to do fairly frequently. Also, there is no tab completion - not even for filenames. There are also some advanced windows features that are not accessible through the plain command prompt, so I moved onto the next built-in solution...


![](../img/wt_1.png)



## Windows Powershell

This is Microsoft's current pet project for interfacing with a Windows computer. More powerful, more commands, and some nice ease-of-use changes make this shell feel more modern. It is baked right into Windows explorer, and opening a folder with Powershell is right in the `file` menu. 

Tab completion makes a nice arrival, and so does some extra tools like task scheduling (not quite as easy as cron, but still useful). The scripting language is also slightly different, and I think a bit more pleasant than batch. Of course, good luck sharing them with anyone, as the hoops to run external `.ps` files are pretty extensive - and I don't blame em, because really who is trying to run a powershell script. I would block them too.



## WSL terminals


I didn't learn about WSL until mid-2020, which was way after it had left beta and was already in all win10 boxes. I was so suprised that I rushed and installed it as soon as I could, and was so sure it was going to be a game changer!

In a way, it totally is. I installed Ubuntu 20.04, the classic verison, and was amazed I could run whatever CLI utils I wanted. I could `neofetch` my windows box, and messed around in those virtual directories to see what was up. It is nice that the area is sort of quarantined off, but when it came time to actually do some sort of work with it, you can't just copy and paste a path to `cd` into. You have to modify the leading `/mnt/c:` instead of just `C:` which like, idk it just takes a sec. 

Honestly, as I type this I'm realizing that I could totally `alias` something in there, a quick script to turn a cd command into something that dynamically changes windows-internal paths to be in the apropriate mounted drive. I will do that and perhaps release it on my page here...hmmmmmmm...


## Windows Terminal

Another tool that I didnt find out about until around when I learned about WSL, I was initially thinking this would be a gamechanger - and maybe it still will be. As far as I can tell, there are two main things that this adds to the commandline experience on Windows:

First, it allows tabbing of various other terminal instances. If you want to quickly open a powershell next to an Ubuntu, and then add a tab of Kali next to it, you can easily switch between the three of them. I might simply prefer having three separate windows open, but if you like the the tabbed workflow then this is a totally cool addition. 

The next gamechanger is a contextmenu entry for "open this folder in Windows Terminal", which really brings that linux ease to your Windows gui usage patterns.



## honorable mention: putty
