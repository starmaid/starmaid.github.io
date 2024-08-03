---
layout: post
title: Block Printing on Shirts
tags: printing, screenprinting, stamp, paint
image:
  path: /projects/img/2024-01-16-rpi-synthesizer/finished.jpg
---

![Image of someone wearing the shirt]()

I like making custom shirts. I think screenprinting is a lot of effort, especially for runs with less than like 20 shirts. I don't exactly have an audience that would buy that many shirts, and I also don't want to start printing shirts full time just because I have a few funny jokes to make. Thus, I set out looking for a more efficient way to make designs.

![picture of those iron on shirts i did for christmas](/blog/img/2024-07-13-block-printing-shirts/iron-on.jpg)

I tried the iron-on printer sheets, which totally work! They just are TOO digital. I want to involve real ink, and hopefully last a bit longer. Two-tone or maybe three-tone maximum.

## The concept

My friend Ian used linocut printing to make a custom shirt for his boyfriend Harry's birthday. This opened my mind up to doing stamping. The pattern was really clear, and linocut seemed to take some practice but wasn't the most difficult thing. It worked well!

![harry's birthday shirt]()

The other aspect, however, was that I wanted to generate these stamps with a computer. This would allow me to do very clean design work and then line up multiple colors super carefully. The misalignment during printing would still make it organic, but I prefer that look to actual stamps that aren't sized properly. 3D printing seems like a good way to get material set down.

![blender screenshot](/blog/img/2024-07-13-block-printing-shirts/blender_screenshot.png)

## Testing

I couldn't find any forum posts or blogs about doing this exact kind of thing. This would mean I would have to test...

### Material

I first tried a simple test between rigid PLA and the flexible TPU plastic. Same mini version of stamp, and done on paper.

![paper PLA vs TPU](/blog/img/2024-07-13-block-printing-shirts/plavstpu.jpg)

The results seem to say PLA is better. My theory is that the center of large stamp areas were flexing inward, not applying pressure to the surface of the paper. This would reduce performance.

![diagram of TPU flexing](/blog/img/2024-07-13-block-printing-shirts/tpu-flex.png)

### Surface Finish

At the end of the material tests, I still felt like not enough ink would stay on the surface of the stamp. I tried sanding the PLA surface to both smooth out bumps that would reduce surface contact, as well as add micro-grooves for ink to reside in.

![sanding tests](/blog/img/2024-07-13-block-printing-shirts/sanding.jpg)

Personally, hard to say. I don't think it hurt! However, even after printing there would be a non-insignificant amount of ink left on the stamp. Not sure how to deal with that. Here I scratched it with my fingernail to show how much residual ink there was.

![ink left on stamp](/blog/img/2024-07-13-block-printing-shirts/ink-left-on-stamp.jpg)

### Ink

I prefer to use Speedball screenprinting ink, because it keeps a very good look on fabric as well as being very thin and easy to work with. Ian used this on his shirts as well, so there was an example of it working well.

![picture of the two ink containers](/blog/img/2024-07-13-block-printing-shirts/paints.jpg)

I also tried the super-cheap tube fabric paint they sell at Michael's, which I have good results with hand-painting but it was too thick and globby for screens. Perhaps this viscosity buff would improve the block printing? No, I don't think so. The decrease in opacity probably hurt it a little bit.

### Braying Technique

I then stopped hand-painting ink onto the stamp and tried a few different methods of getting ink on. The sponge brush and rubber brayer were pitted against each other.

![image of the brayers near the paper comparing braying technique](/blog/img/2024-07-13-block-printing-shirts/rollers.jpg)

The sponge needed to absorb so much ink before it could deposit any reasonable amount. Also, it left the surface pattern of the sponge as outlines on the block, which transfered to the work piece. This was kind of cool, definitely the sort of thing a sponge roller is for - adding texture. I didn't like it however.

The rubber brayer just feels like it slips around and squishes ink out in front. It was maybe enough for the paper prints, but I don't see how the block could hold enough ink to make a successful print. I just don't think I've cracked the mystery yet!

### Substrate Composition

Should the material underneath the printing surface be rigid or flexible? I tried a bit of both. I think the results on a rigid surface were clearer and showed less printing from places on the negative of the stamp.

![the drawio comparing the layers underneath](/blog/img/2024-07-13-block-printing-shirts/layers.png)

### Hacks

Reddit suggested that if you are using water-based ink, to spray a little water on the fabric surface before printing. I think this helped a little, but I also forgot to do that on my production shirts because I didn't read my own notes.

### Small Scale

I did some small scale tests on white and black. It seemed mostly fine.

![](/blog/img/2024-07-13-block-printing-shirts/print-onwhite.jpg)

![](/blog/img/2024-07-13-block-printing-shirts/print-onblack.jpg)

## The Finished Product

![picture of a done shirt](/blog/img/2024-07-13-block-printing-shirts/shirt_done.jpg)

It didn't come out the way I wanted. But I don't think it will get much better! So I'm calling it here.