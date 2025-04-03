---
layout: post
title: Resume
---

[View my regular PDF resume](https://github.com/starmaid/starmaid.github.io/blob/master/resume.pdf)

## Places I've Worked

### SRI International 

*Menlo Park, CA*

Software Engineer - Sept. 2021 - May 2025

At SRI, I worked under the Products, and later Commercialization groups. My high-level directive was "work with researchers and labs to bring their early-TRL code closer to production, and assist with efforts to work with external clients." I worked in a handful of different labs on every part of the stack.

**SynFini Chemistry Automation**: The [SynFini lab]((https://synfini.com/)) was just starting to do [commercial work for clients](https://www.sri.com/press/press-release/sri-international-enters-drug-discovery-and-research-collaboration-with-sanofi/) when I started, everal new chemists had been hired, and they were expected to run the system and approach high throughput. While they did this, the hardware and software would need maintenance and upgrades.

- Programming FANUC robot industrial robots
- C++ and C# interfacing with hardware, rebuilding and deploying in lab
- rebuilding and deploying docker images to hardware in lab
- diagnosing networking issues, finding out IT had changed things, DNS records, firewalls, etc.
- Testing and rolling out updated versions of the django+postgresql web platform on kubernetes (developed by external contractors)
- Investigating and fixing bugs on web platform
- Custom lab hardware
- Vacuum pumps
- Speedvac
- Rotovap
- HPLC pumps

I also spent a significant time writing manuals for our custom hardware, as well as compiling the regular maintenance procedures for COTS hardware. This helped make sure all operations were to the standards of our EH&S department, who would periodically evaluate our hardware for compliance. These manuals also helped the lab [spin out as a startup in late 2023](https://www.sri.com/biomedical-sciences/sri-spins-off-ai-powered-drug-discovery-platform-synfini-inc/)

**Taurus and XRGo Teleoperated Robots**: SRI makes a general-purpose, bi-manual, teleoperated robot that is battery-powered and light enough to fit on the tool arm of an EOD or other mobile robot. I contributed to the effort to turn the software into a standalone product that could be integrated with commercial robot arms, called [XRGo](https://www.sri.com/product/xrgo/).

- Writing c++ code for low-latency robotic control
- Using DirectX 11 and CUDA libraries in c++ for fast image encoding, streaming, and processing
- Developing for VR with Unreal Engine
- Programming industrial 6-axis arms from
    - Staubli
    - Denso
    - Universal Robots
    - RealMan

As part of an Internal Research and Development effort, I worked with a PI from our Vision and AI group to use a trained diffusion policy to control the robot. My focus was to add interfaces into our low latency netcode and shared memory from the AI-level code. These high-level functions extended the capabilities and made our software much easier to develop new applications for.

**AVSR Autonomous Robots**: [AVSR](https://www.avsr.io/) is a new startup out of Montreal that is working on bringing dextrous, AI controlled mobile robots into small/medium businesses. I customized our hardware interface code for their target hardware, and using our code they will be able to scale teleoperation and collect massive amounts of training data. I also performed a study on teleoperation efficiency with latency, as well as characterizing latency from remote sites. 

**Medical Devices Corner**: [MDC Inc.](https://www.meddevcorner.com/) is a startup in residence at SRI created by three Stanford grad students - the core idea is a [hydraulically-actuated robot for teleoperation inside an MRI bore](https://patents.google.com/patent/WO2024086666A1/en). I helped with the creation of an Unreal Engine-based simulator for their robot. Additionally, I worked on a visualizer that used instanced geometry in Unreal Engine to render voxel clouds of live-updating MRI data as it was captured by a machine, so an operator in VR could take arbitrary slices of 3D MRI data.


### Resilient Extra-Terrestrial Habitat Institute

*Purdue University, West Lafayette IN*

Undergraduate Researcher - Feb. 2020 – May 2021

Project: Creating a MATLAB/Simulink model for the Lunar meteorite impact environment
for use in RETHi’s habitat simulation. Produced a written report detailing the math and
statistics theory involved. Theory was presented at Purdue’s undergraduate research
conference in Spring 2020, software model presented in Fall 2020.
Rotorcraft Aeromechanics - NASA Ames Research Center


### Rotorcraft Aeromechanics

*NASA Ames Research Center, Mountain View CA*

Software Engineering Intern - Jun. 2019 – Aug. 2019

Project: Created a Python module for quickly accessing and statistical processing NFAC
wind tunnel data, which was integrated into a new data analysis program to replace a 20-
year-old predecessor. Results documented in NASA report.
Introduction to Honors Engineering - Purdue University


### Introduction to Honors Engineering

*Purdue University, West Lafayette IN*

Teaching Assistant - Aug. 2018 – May 2021

Grading freshman engineering student work in physics and programming. Managing GitHub
repositories and writing Python software for TAs and students. Pushing Linux configuration
and firmware to over 300 student raspberry pi devices over the internet.


### Commercial Rocketry Team

*Purdue Orbital, West Lafayette IN*

Design Lead - Sept. 2017 – May 2020

Directing the construction of rockets to fly on commercially available propellant, aiding in
certifying team members for high-power rocketry, and performing flight and ground tests of
sensors and electronics. HPR certified 6 new members. Launched test vehicle to 8000’ AGL


## Things I can do

Write software comfortably in... 
- [Python](https://github.com/starmaid/pulseofexploration)
- [C/C++](https://github.com/starmaid/depth-of-field-cpp)
- [C#](https://github.com/starmaid/augmented-gem)
- Java
- [Haskell](https://github.com/starmaid/adventofcode2022)
- [MATLAB + Simulink](https://github.com/starmaid/rethi-meteorite)
- JavaScript
- Bash/Shell Script
- Batch Script
- Powershell

With these tools and frameworks...
- [Docker + Kubernetes](https://github.com/starmaid/birdflight)
- [React](https://github.com/mchartigan/bitwise)
- [Flask](https://github.com/starmaid/netkiss)
- [Jekyll](https://github.com/starmaid/starmaid.github.io)
- Django
- Figma

With these Databases...
- SQL + Derivatives
- [Google Firebase](https://github.com/mchartigan/bitwise)
- [MongoDB](https://github.com/starmaid/Recycle-It)

I can write control software...
- For an industrial robot
- For an autonomous vehicle
- For a winged aircraft
- For a multirotor
- For a linear time invariant system
- For a nonlinear system, linearized around an equilibrium

I can write a Game/Simulation...
- In [Unreal Engine](https://github.com/starmaid/NightCourier)
- In [Unity](https://github.com/starmaid/augmented-gem)
- For VR
- That connects to external robotics code

I can make 3D models in...
- Solidworks (300+ hours)
- Autodesk Inventor (300+ hours)
- Blender (~200 hours)
- CATIA (~100 hours)
- Fusion 360 (~50 hours)
- OpenSCAD (3 very fun hours)

I can turn those models into objects with...
- 3D printers
- Hand tools
- Power tools
- Machine tools
- CNC Machine tools

I can simulate and optimize orbits with...
- FreeFlyer
- GMAT
- My own equations in MATLAB

I can manage a project with...
- Jira+Confluence, Trello
- GitHub/Lab Issues+Wikis
- Generated pages with Doxygen/PyDocs/Whatever language-specific sw
- MS Teams Planner (does anyone else use this?)

Make interactive and generative art with...
- VVVV
- [Hydra](https://github.com/starmaid/hydra-stuff)
- [TidalCycles](https://github.com/starmaid/tidal)
- Any bits of hardware you toss my direction

Make media with...
- Adobe Photoshop and Premiere
- Ableton Live
- FL Studio

Fly...
- High-Power solid rockets up to 1280 N-s of impulse
- My homebuilt FPV racing drones