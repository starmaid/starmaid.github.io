---
layout: post
title: Flashstep Game
tags: gamedev, godot
image:
  path: /blog/img/2026-06-02-lights-rectangle/thumb_sm.gif
---

Flashstep is a game demonstration I made on August 10, 2025, and finally polished and posted online on August 3, 2026. The basic premise is the ability to teleport to a location where you look and click.

[gif of the game on itch]()

This started when I attended MAGWest for the first time in 2025. I really enjoyed the convention, and obviously it made me want to make a game that wasn't my magnum opus - just something fun and interesting. The time spent in the LAN party room playing Halo CE with 12 people was so nice, and fun movement shooters were on my mind. Maybe it had been too long since I played Titanfall. 

[some magwest image from 2025]()

Another thing I got to do was wander around the indie game hall, playing prototypes and complete games that were obviously way more feasible for a single developer. I got to learn what made them work well, my pain points etc. 

There was one game i got to play, [*No Signal*](https://store.steampowered.com/app/2840590/no_signal/) that is a hidden-object game set on a space station. This game lets you control a disembodied camera as you uncover a mystery, which is really fun. In addition to exploring the stylized space station, there are also a bunch of minigames and puzzles. 

![gif of nosignal]()

One thing that I noticed while playing through the demo was that the camera was locked on a world Z-up - and it never changed. This made it very easy to orient yourself in the world, but it meant that while looking at the ceiling or floor you were gimbal locked. I think this works for the disembodied phase-through-walls camera of *No Signal*, but if I was a character inhabiting this environment I think it would feel jarring.

So while sitting at a talk that I didn't need to pay 100% attention to, I loaded the Godot game engine on my laptop and booted it up for the first time. I threw a couple cubes in the scene, learned how to write scripts, and made a quick demo. After a bit more work the day after, I had a working demo.

![gif 1 of the original demo, showcasing euler camera movement]()

Heres Euler camera motion. It is very easy to keep your bearings, but quick mouse movements are unpredictable, especially as you get further from the horizon line. It becomes hard to chain jumps.

![gif 2 of the original demo, showcasing quaternion movement]()

With quaternion motion, its much easier to make quick motions that end up where you expect them to - allowing fast chained inputs.

My vision would be to turn this into some kind of grappler-shooter - with the difficulty of the [Attack on Titan Tribute Game](https://aottg2-team.itch.io/aottg2) and the speed of Titanfall, I wanted it to be exciting with a steep learning curve that feels good when you learn how to navigate. However, that sounded like a lot of work to do and I had just started a new job, so I shelved it.

I didn't touch it for a while. Then, about a year later, I ended up with an idea for another game - one that could use this base code. As a first step, I thought it would be useful to go all the way through publishing and uploading an HTML5 game to itch.io from Godot. This would teach me every possible hurdle with mouse input, performance, tooling, whatever. So this game was a perfect candidate.

After finding the source files (not trivial with my disjointed backup system) I was able to throw some textures on the cubes, give it some vibes, and get it out the door. I added buttons so the user could A/B test their favorite method of camera movement! It was a perfect little test program and it verified everything I needed.

![a different gif of the new game]()

[You can play it on itch.io here.](https://st4rm41d.itch.io/flashstep-demo)

Anyway. Go read about [Graveyard Orbit]({% link ./2026-08-29-graveyard-orbit-game.md %}) if you want to hear what became of this.