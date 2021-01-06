---
layout: post
title: Bitwise
tags: 
---

Written December 2020

[Link to the site](https://bitwise-a3c2d.web.app/)

[Link to the project github repo](https://github.com/mchartigan/bitwise/)

![logo](./bitwise_assets/logo.png)

## Introduction

Purdue University's **CS 307 - Software Engineering** is an upper-level elective that satisfies requirements for majors and minors in the college of Computer Science. I decided to take this class in Fall 2020 as my last requirement of my CS minor, as I heard good things about it, and was excited to be able to create a functional application with a group of other students. As of Spring 2020, the class involved a proposal for the application or website the students wanted to design, where they would set their own goals and work towards them. However, over Summer 2020 this was changed to a more rigid set of requirements that did not leave much room for innovation. Although my team was dissapointed to learn this, we were releived to have many resources availible for the project assigned.

Our team consisted of five members:

- [Mark](https://mchartigan.github.io)
- [Zach G.](https://github.com/zgeorge22)
- [Zach M.](https://github.com/zmcclary1205)
- [Kyle](https://github.com/vandewak)
- and me!

The requirements, while many, boiled down to two simple words: *"make Twitter."* Short posts, images, timeline, liking, commenting, following users, tags, topics, etc. All social media sites nowadays follow this pattern, and we were assigned to add our platform to the mix. Our TA, Sid, suggested that we use Google Firebase as our platform, as they do the hosting and database management for users. This would come in handy, as our team had almost no experience in web development. We all had similar "I made a single page plaintext website in HTML in 2009" story, and I had done a little work with wrapped/unwrapped client APIs for Tumblr, Twitter, Discord, and Tenable.io. But this would be nowhere close to get us through developing an entire social media platform.

The project was broken up into three 3-week sprints, with a week between each one to write planning documents and retrospectives. These sprints are longer than the typical one-week professional sprints, but remember we are full-time students taking four other classes. The amount of time dedicated to the project over those three weeks was expected to be roughly 30 hours per person, equating a perfect 6-hour, 5-day workweek. 

The rest of this page will delve into the details and descisions made while building this site.

## Development

I know the history is all in github, but I want to write it out here so others can read it and get a little insight into our process. 

### Pre-Sprint 1

we had to learn javascript. I knew how APIs worked for tumblr, twitter, and discord (https and nice wrapped ones) but had never developed a backend. 

We had some preconceptions of the class, wanted to maybe make a different site. Forced to make twitter

We also watched tutorials for firebase, I set up a test project to practice deploying things and how to use their interface.

if you are reading this page planning on making your own firebase project, MAKE YOUR FILES A REACT PROJECT FIRST, THEN ADD FIREBASE TO THE REACT PROJECT. This prevented us from making a full react app, and had to use CDNs for things we ideally would not have.

### Sprint 1

made an html-only shitty version of the site

### Sprint 2

got halfway done converting it to react elements.

my page redirection thing failed because i didnt understand how bitwise hosted things

### Sprint 3

Finished conversion into react-based project. New page redirection that was hacked together. 

Infinite scroll working perfectly, I was really proud of that one.

### Further work

I closed the api rules

## Reflections

take this from the document we already wrote

