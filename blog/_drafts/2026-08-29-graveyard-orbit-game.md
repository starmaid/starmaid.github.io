



This was for a gamejam.

I had a previous idea that i made into the flashstep demo. I had envisioned that originally as a multiplayer game, but i wanted to only make a single player game here.

So I knew the basics of what I wanted to do for the gamejam, but it wasn't until the theme poll came out that I had the idea. I think I only spent like 30 seconds after seeing the option of necromancy to remember that graveyard orbits are called that, and reviving a satellite could be the angle. I also liked the secret garden idea, I could feasibly make a game where it took place inside a space station that was overgrown. That could even be an idea for the eventual multiplayer movement shooter.

picture of the poll

Anyway, I decided to keep it simple and stay in orbit. Timeline of the jam, I spent the first weekend working on flashtep, which went public on Aug 3. 

Since I had the movement figured out on paper, I wanted to focus on vibes. I feel like atmosphere and style is very easy to lose sight of when you have a limited time, so I made sure to prioritize some of it first. This resulted in the first demo gif that was specifically for this game on Aug 4.

gif of stars

This was an interesting demo because I knew I wanted the game to be low-resolution. This was partially due to the vibes, but also a performance choice - I needed it to be playable in browser by the most terrible hardware. This would give me good reach and all members of the ebrosystem could enjoy it.

That first week was spent bringing that grappling system into the game and making it actually pull you towards the target instead of just teleportation. This was definitely a battle between me and the physics engine, but ultimately it behaves better and more logically than Unreal Engine so thats a massive W for godot.

By the second weekend, I was also able to add some other movement techs that made it just a bit nicer, like this kickoff input.

gif 2 kickoff

That sunday, I also added a particle system for the rope.

gif 3 rope

I went back to working on the visuals for the game, and adding the HUD. For the stars, I ended up throwing them through a posterize and actually sampling them once instead of doing it in screen space, which allowed the player to use star tracking for orientation. The earth and moon were also thrown through some stilization and posterization so they wouldn't look unreal engine. The HUD itself would involve some UI and some 3D objects for displays. This allowed me to play with some of the more complex parts of Godot's scene composition. 

gif 4 

Around this time, two things happened. First, magwest! An awesome weekend in San Jose playing indie games and listening to video game music, Also great for cosplaying and getting drunk. I didn't get anything done on my game that weekend, so it was a much-needed break.

The next actual game task was to enter blender to model the actual content of the game. I had until now been entirely working on the game on my MS Surface Pro 8 plugged into my desk's docking station, letting my gamer PC just sit idle. After getting back from magwest, I couldn't really bring myself to immediately get working. So I spent a few days after work attempting to shrink the Windows 10 partition on the boot disk and install NixOS. Due to immovable files on Windows this really took a few attempts and like 3 evenings, but eventually we got there. Now that computer is so much more usable, especially for development. 

I then started modeling some objects. I needed both some satellites, which fortunately I already had from the [secret santa gift from december]() but I also needed random space junk. Probably more junk than satellites. So I just threw some stuff in there.

The most fun think to model was the starting ship, which while just a prop, I think tells some story of the game and emphasizes how the operation is being run. I also got to base it a little bit off the Shuttle-A from the *Orbiter* simulator. Did you know they released a [new 2024 version](https://github.com/orbitersim/orbiter/releases/tag/2024)?

screenshot of shuttle-A from orbiter

I was able to bring these all into the game and had one more push for the last weekend - level design. I had to take the models I had made and actually make the player try to achieve a goal. This took significantly more brainpower than I was expecting - but I was able to break it down into a few simple ideas.

add that list from notebook here

A critical piece was that I needed it to be impossible to just grapple directly to the destination - there had to be something in the way. I created two limitations: finite length grapple ropes, and radiation zones. The finite length meant that you had to only grapple to nearby objects, obviously. This allowed me to place objects strategically in places that were hard to get to, and the player has to set up their next move. The radiation allowed me to put huge blocks of "don't go here" on the map, which made it more circuitous and non trivial.

For the radiation, I also got the chance to make a fun little animation of the HUD filling with static. This is the initial version, but the final one is even better in my opinion.

gif 5

Also in that last week I had enough time somewhere to put together a single background song for the game, something that evoked that fear of the unknwon. I just messed around with chords until I found something I liked.

soundcloud embed with the song

I also had to create some exposition, menus, and the intro somewhere in there. Those didn't seem terrible and just kindof happened. 

I submitted the game first on August 29. This gave me a free weekend while Lucy's parents were in town, and then on Monday I immediately went on a work trip. No rest for the wicked!

See you next time.