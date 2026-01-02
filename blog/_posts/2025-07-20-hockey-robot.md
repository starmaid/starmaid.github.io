---
layout: post
title: Hockey Robot
tags: nhrl, combat robot
image:
  path: /blog/img/2025-07-20-hockey-robot/bunny_draw.png
---

{% include youtube_embed.html id="Y_yZiCNvSLQ" %}

*Entering the world of combat robots.*

## Introduction

In fall 2024, I went to Nexus Knockout 1 to watch my friend [Scott](https://battlebots.com/robot/overhaul-wcvii/) play bot hockey. It looked cool, but I wasn't sure if I would get myself involved. 

![](/blog/img/2025-07-20-hockey-robot/nexus1.jpg)

I went again, and at the second Nexus Knockout in March 2025 I subbed in to drive Scott's second robot. We won!

![](/blog/img/2025-07-20-hockey-robot/nexus2.jpg)

For winning, our team got tickets to the finals at Opensauce 2025. I also got laid off around this time, so I suddenly had a lot of free time to bring my own custom bot to the competition.

## Construction

I talked to Scott about his design, because I liked it and thought it was simple but also adaptable. I made a model in FreeCAD.

![](/blog/img/2025-07-20-hockey-robot/v2.png)

To make sure I got sizing and stuff right without spending too much money, I lasered it out of particleboard at work, and printed parts out of PLA.

![](/blog/img/2025-07-20-hockey-robot/v1.jpg)

This gave me a platform to start doing electronics work on the robot.

![](/blog/img/2025-07-20-hockey-robot/home_1.gif)

![](/blog/img/2025-07-20-hockey-robot/home_2.gif)

![](/blog/img/2025-07-20-hockey-robot/home_3.gif)

![](/blog/img/2025-07-20-hockey-robot/current.jpg)

I got the ESCs set up, the receiver bound, and made sure I wasn't drawing too much current. 20A max using this clamp ammeter was great to see. I was using 80A ESCs and had a battery that could do 170A burst, so I was totally overspecced. The capacity would likely last me multiple matches before fully depleting a battery, which would take the strain off only owning two of these.

![](/blog/img/2025-07-20-hockey-robot/v5.png)

I made a few tweaks to the design that involved shockmounting the motors in TPU, and this time I was ready for a laser. I had an idea for a porcelain-style floral pattern on my robot, and took a small detour to write a script about it. Check out the [GitHub page](https://github.com/starmaid/floral-gen) for more on that.

![](/blog/img/2025-07-20-hockey-robot/v1_build1.jpg)

![](/blog/img/2025-07-20-hockey-robot/v1_build2.jpg)

After that, I was ready to take it for a test against real robots. Scott and Kyle were able to meet up for some practice in a nice shaded parking lot.

{% include youtube_embed.html id="C8_bE8iE5hA" %}

![](/blog/img/2025-07-20-hockey-robot/practice1.jpg)

It was super helpful! I discovered a few major, game-breaking problems. 

1. I couldn't keep the puck in my forks, it would just bounce over.
  
  Solution: build raised walls onto the rails.

2. Due to my weight distribution, I couldn't push other robots.

  Solution: move the battery behind the wheels, move the rails closer to the center.

3. The way my wheels were mounted caused massive amounts of friction in my gearboxes, and also caused them to slowly disassemble themselves. This heat buildup also started melting my motor isolator sections.

  Solution: mount the wheels differently. Also, add airflow and heatsinks to the motor enclosure.

![](/blog/img/2025-07-20-hockey-robot/practice2.jpg)

Each of these was solvable, and any one of them would have made game day a nightmare. This resulted in a redesign, which resulted in a more balanced bot.

![](/blog/img/2025-07-20-hockey-robot/v8.png)

![](/blog/img/2025-07-20-hockey-robot/v2_build.jpg)

So shiny! I had time for one practice the night before Opensauce with my team for this competition - Hock Stuff! Orion and Nick were able to get their bots driving and we had a quick practice, and I made a last minute discovery that I needed a wheelie bar - a quick print the night before the competition. Unfortunately, our practice was also late at night, and I didn't get any good photos of the robots.

![](/blog/img/2025-07-20-hockey-robot/bunny_draw.png)

*Bunny, who helped run and organize the tournament, also drew a cartoon of my bot!*

## Competition

![](/blog/img/2025-07-20-hockey-robot/maidbot.gif)

*Maidbot shows her stuff on the rink during practice. Its okay! Shes just delicate.*

Friday was loadin and systems check. We all got to make sure things were working and do last minute assembly and testing. I was mostly relaxed once I got everything set up, as we had no battles.

![](/blog/img/2025-07-20-hockey-robot/drivers_meeting.jpg)

*It was fun to get the whole bot hockey gang together!*

![](/blog/img/2025-07-20-hockey-robot/ready.gif)

*POV the first match is about to start*

![](/blog/img/2025-07-20-hockey-robot/team_2.jpg)

*So focused...*

Our team:

- **Orion Beach**, also engineering lead of [Offbeat Robotics](https://www.offbeatrobotics.com/), and their bigbot Hijinx
- **Nick Hom** from bigbot team [Ribbot](https://battlebots.com/robot/ribbot-2021/)
- Me :) its my first time lol

![](/blog/img/2025-07-20-hockey-robot/team_1.jpg)

We had three guest drivers over the course of the competition. This was super fun and Orion and Nick have some cool friends! IT was also helpful because Orion hadn't let the loctite dry on the wheel nuts and they kept falling off during the compeition, requiring quick bot swaps. This also kept the energy high and got more people involved, so thats super cool.

- [Bam Singhasaneh](https://www.bamiium.com/) from Team Valkrie helped us defeat team Magic Smoke in the qualifiers, as well as subbing in periodically through other matches.

- [Lisa Winter](https://en.m.wikipedia.org/wiki/Lisa_Winter), who is normally judging these kinds of matches, helped us beat Royally Pucked in the qualifiers.

- [Matt Vasquez](https://battlebots.fandom.com/wiki/Team_Fast_Electric_Robots) from Team Fast helped us defeat Royally Pucked again, in the first round of the elimination bracket.

![](/blog/img/2025-07-20-hockey-robot/groups.svg)

We did pretty well in the qualifiers. Second-highest seed. At the end of the last match on Saturday, somehow the rear panel of my robot was completely shattered. I only noticed because my wheelie bar was knocked out and I had a bit of a controls issue - the team sticker was the only thing keeping my battery compartment closed. Acrylic is not a good choice for bot combat, and everyone I talked to expressed this - but I made it work somehow. Definitely something I'll fix before the next compeition.

![](/blog/img/2025-07-20-hockey-robot/shatter1.jpg)

![](/blog/img/2025-07-20-hockey-robot/shatter2.jpg)

Luckily I had a spare! I also spent that night printing a cover that allowed me to stuff some foam between the outside of the robot and that panel. It probably saved my ass a few times (literally!)

![](/blog/img/2025-07-20-hockey-robot/scene.jpg)

That brought us into day two, where we entered the elimination bracket.

![](/blog/img/2025-07-20-hockey-robot/scene_2.jpg)

Honestly the vibes were really cool. Cheering, struggling for victory, but also knowing that these are just toys and everyone is here to have some fun.

![](/blog/img/2025-07-20-hockey-robot/bracket.svg)

We got second place! Team (No) Ice is just...really good. Their drivers are top notch, and their bots are incredibly efficient. We had a lead in both matches, but in the second half they were able to create a massive lead in the last few minutes of the game.

![](/blog/img/2025-07-20-hockey-robot/afters.jpg)

![](/blog/img/2025-07-20-hockey-robot/temps.jpg)

My robot got pretty beat up, but most of it was just on the tape I slapped all over the panels to keep them from shattering! Also, after the finals match, my motors were the hottest I've ever seen them, almost 80C. That's crazy!!!!!!

![](/blog/img/2025-07-20-hockey-robot/everyone.jpg)

Thanks to the tournament runners, Bunny, Alex, and all the other teams. It was a great time and I plan to keep playing this fun game with all of you.


[https://bothockeyleague.com/bot-hockey-info/](https://bothockeyleague.com/bot-hockey-info/)
