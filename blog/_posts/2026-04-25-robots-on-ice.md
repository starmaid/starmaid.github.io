---
layout: post
title: Robots On Ice
tags: robot, bhl, hockey, outreach
image:
  path: /blog/img/2026-04-25-robots-on-ice/thumb.jpg
---

{% include youtube_embed.html id="lbAELyJupGA" %}

*[Theres actually an article about this in the Mercury news?](https://www.mercurynews.com/2026/04/25/robots-take-up-ice-skating-saturday-at-san-jose-robotics-event/)*

[Robots on Ice!](https://www.robotsonice.org/) is an event hosted by [The Silicon Valley Ice Skating Association](https://siliconvalleyskates.org/2026/05/26/robots-on-ice-2026-racing-robotics-and-innovation-in-san-jose/) usually in the spring at Sharks Ice, San Jose. I think the primary focus is to do a fun outreach event and let the community see some fun robots built by local people. 

I noticed a lot of AI and hype language used in the promotion and execution of the event. I think there was only like one or two people coordinating and running this, so I imagine they had a lot to take care of. The organizers also sent pre-formatted social media material for promotion. I don't usually exhibit at stuff, so I was very new to this kind of material.

![photo of our table](/blog/img/2026-04-25-robots-on-ice/1_table.jpg)

Our loadin was very uneventful. It did take Lucy and I a second to find the specific ice rink we were using, as we had never been to this complex and they had like 6 rinks. I also only brought a toolkit and the robot, so no huge bin or anything. Also while there, I went to the team store and bought hockey tape and an ice puck. Hockey tape is much like gaffer tape, but narrower and a bit thicker. I obviously bought the gay pride stuff, planning to use it for decoration. I put it on one of my forks, like it was a stick.


### Who else was there

- Two SRI Robotics people, who like hockey and curling.
- The skating robot guy
- that dalek team
- like three FIRST robotics teams
- That ROS rover startup team
- That moddable animal toy team
- That hexapod guy
- Random kids with toys
- Audience of mostly kids and people who were already at the rink that day

![picture of the audience](/blog/img/2026-04-25-robots-on-ice/2_crowd.jpg)

### People who I think would have fun but werent there

- more bot hockey people
- rc drift people
- humanoid robot people

### Phases of the event
- Drive around in open play area, collect the balls the first teams were releasing
- Race
- Play hockey with a kickball

![picture of the audience](/blog/img/2026-04-25-robots-on-ice/3_lineup.jpg)

## What was hard

So obviously the biggest challenge was traction - our robots have 60A hard rubber wheels, which are very much optimized for coarse, hard surfaces. This speaks to our strength and dominance on parking lots. However the amount of friction was so low it was hard to manage. I attempted to keep traction and stay in the static friction regime by accelerating very slowly, but even with low braking on my ESCs it was very difficult to slow down or turn without losing traction inadvertently. I attempted to put some tape on my wheels to see if it would change anything, but i couldnt really tell. The tape just got wet.

The second issue was running into piles of snow on the ice. These were surprisingly sticky and would fully immobilize our robots, requiring someone to hit the robot with some object, or to just wait for someone with hockey skates to give them a nudge.

![me, lucy, scott, and victor](/blog/img/2026-04-25-robots-on-ice/4_group_photo.jpg)
*Me, Lucy, Victor, and Scott.*

Another issue was water. The bots were not meant to be watertight, and moisture was not an anticipated issue. We ended up taping up all likely ingress points, which saved our internals. However, the annoying issue came months later - Scott's robots specifically ended up rusting their black oxide bolts after not drying them fully before storage.

Another annoying issue was how our robots weight distribution and contact patches contributed to spinning out. All of our fork bots weight is in front of our drive wheels. This lets our forks ride on the ground, to get under opponents. But when sliding on the ice, the forks drag more than the wheels - something about the material, edges, etc. and they spin to face backwards. This almost made it better to drive backwards, but this was generally hard to control.

An issue that affected some peoples robots but not our own was radio range/channel usage. There were on the order of 20 robots on the 2.4 ghz band, and many transmitters were on BLE - I didn't have an SDR to take a look at the airwaves, but many people were having issues with connections dropping out - to the point where victor had to follow his robot around the arena to stay connected.

![while we were driving](/blog/img/2026-04-25-robots-on-ice/5_drivers.jpg)
*Lucy and Scott focusing on driving.*

## What was great

Our robots were the only ones that could really handle a puck at all. Most people were just using toys that were either too small or too big to handle the specific size of a puck. I would love to see a full hockey match here on the ice. This was where a kickball, which was large enough to be just bumped into full speed, ended up being the hockey puck for our game.

The FIRST robots were very skilled at driving on the ice. I think the two most mobile teams had swerve drives, and it helped that they were likely heavy - more static friction. I wonder if adding weight would improve grip at the cost of more momentum to pull through turns? I also wonder what their tires were made of.

![full group pic of everyone who was there](/blog/img/2026-04-25-robots-on-ice/everyone.jpg)

## Notes

I'll probably try to go again next year - this was pretty neat. I'll put more thought into some tires that could really chew up the ice, maybe something with some metal. Theres also no weight restrictions like bot hockey games, so adding a bunch might be worthwhile.

