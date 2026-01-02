At SRI, I worked under the Products, and later Commercialization groups. My high-level directive was "work with researchers and labs to bring their early-TRL code closer to production, and assist with efforts to work with external clients." Under this directive, I worked in a handful of different labs on many different levels of the stack. Because I was funded from a different organization, the labs were appreciative of another person to help with the work.

**SynFini Chemistry Automation**

[SRI Press release - November 2021](https://www.sri.com/platform/synfini/)

Where they started: in 2021, the SynFini lab was just starting to do [commercial work for clients](https://www.sri.com/press/press-release/sri-international-enters-drug-discovery-and-research-collaboration-with-sanofi/) that expected target molecules, instead of a co-development proof of concept. Several new chemists had been hired, and they were expected to run the system and approach high throughput. While they did this, the hardware and software would need maintenance and upgrades - this is where I came in.

*Maintaining and Upgrading Software*: This was primary - 

- FANUC robot programming
- C++ and C# interfacing with hardware, rebuilding and deploying in lab
- rebuilding and deploying docker to hardware in lab
- diagnosing networking issues, finding out SRI IT had changed things, DNS records, firewalls, etc.
- connections and certificates, renewing and generating
- Testing and rolling out updated versions of the web platform (developed by external contractors)
- Later, determining cause and fixing issues with web platform myself

![pictures of famuc screens from manuals?]()

*Maintaining Hardware*: The first critical thing I had to do was maintain hardware. By August 2022, I now had a second engineer who would focus on these, but for the first almost-year I was responsible.

- All Synfini devices
- Vacuum pumps
- Speedvac
- Rotovap
- HPLC pumps

![pictures of speedvacs and vacuum pumps and stuff]()

*Writing Manuals*

I wrote [number of pages] of manuals for these machines, including operation, maintenance, and emergency procedures.

![picture of a manual zoomed out]()

*Improve Safety*: One thing that would periodically come up during operations was safety - either I would have a problem with something, our EH&S officer would have a problem, or an operator would feel unsafe.

- Modifying and implementing fume hoods
- Cases and panels, wiring

![picture of the sjp fume hood]()

*Power outage protection*: While SRI was testing their onsite diesel generators for backup power, we realized we were not able to withstand short power breaks while the generators spin up. We also noticed some issues due to brownouts and frequency dips. An easy solution here is to put everything on UPS devices.

- UPS device on everything
- Softstarts on pumps

[SRI New Spinout Announcement: Synfini Inc. - September 2023](https://www.sri.com/biomedical-sciences/sri-spins-off-ai-powered-drug-discovery-platform-synfini-inc/)

*Prepare to move*

Once it was clear Synfini would be spinning out, we had to focus on documenting everything. Every piece of software installed on every computer, how to build it, how to load it, licenses, networking permissions, ports, addresses, what services they connect to.


[The new startup website](https://synfini.com/)

**Taurus Robot**

SRI makes a general-purpose, bi-manual, teleoperated robot that is battery-powered and light enough to fit on the tool arm of an EOD or other mobile robot. At the time of writing in April 2025, we have [VERIFY HOW MANY] robots made and shipped. When I was brought onboard, SRI was looking to sell towards commercial clients, instead of just the government and universities. 

*Unreal Engine Simulator*: The simulator is a great tool for our robot. Pretty simple, the physics engine is nice and you just throw the robot in there. We run our software with a virtual output, which means the whole stack except for the last bit of hardware-specific code is touched. 

- Firstly, test code and poses before trying them on hardware
- Validate workcell size, arm reach, tool type - before purchasing anything
- Simulate and gamify tasks for a client to train employees

*Software support for the Taurus robot*: I made some small changes to the control code for the robot, which were incorperated into client deliveries.

**Medical Devices Corner - MRI Robot**

[MDC Inc.](https://www.meddevcorner.com/) is a startup created by three Stanford grad students - the core idea is a [hydraulically-actuated robot for teleoperation inside an MRI bore](https://patents.google.com/patent/WO2024086666A1/en). They are in residence at SRI, both for renting lab and office space, but also for co-development and other venture assistance. Early on, I was asked to help with the creation of an Unreal Engine-based simulator for their robot. Additionally, I worked on a visualizer that used instanced geometry to render voxel clouds of live-updating MRI data as it was captured by a machine, so an operator in VR could take arbitrary slices of 3D MRI data.

![some gifs from that presentation]()

**XRGo Teleoperation System**

[What was the exact lore for the start of xrgo?] Somehow Staubli and SRI got in contact and we got a loaner arm. The idea is to use our teleoperation software and run it with arms that are manufactured by other companies so they can go places our custom hardware would never be ready for, because it would be cost-prohibitive for us to develop and sell in those spaces. Staubli's sterile/pharma line of robots are sealed and washdown rated, so are great for using inside cleanrooms and pharma manufacturing lines. This was our first target market.

*Software support for commercial robot arms*: Hardware-specific code had to be modified to run these arms. It was fun because for most of these I got to learn how to program basic functionality on the controllers, before moving into the specific configuration that would let me stream joint angles to the arm.

- Staubli
- Denso
- Universal Robots
- RealMan
- RobotIQ Gripping tools

*Random workcell stuff*: This is splicing cables, managing networks, passthroughs, lighting, power conversions, and random other stuff that has to be done to support a robot. Our team was small, so we all did everything.

*Give tours*: Honestly, I did not realize how much of my time would be spent talking to various reps, investors, students, etc. and running them through a crash course on how to operate the robot. It was a good way to get a pitch down.

*Full OpenXR Support*: Originally, we used only Oculus plugins. As we wanted customers to use whatever headset they want, we had to buy and test a few different headsets. I moved all Oculus-specific code to use OpenXR instead. With SteamVR this gives us more options. I've tested on these headsets:

- Oculus Rift S
- Oculus Quest 2
- Oculus Quest 3
- HP Reverb G2 (before windows dropped support)
- Pico Neo 3
- Valve Index

I also used but there was a bug in the HTC Focus 3.





[](https://www.sri.com/product/xrgo/)

[XRGo introduction page](https://www.sri.com/atsd/sris-xrgo-robotic-platform-could-keep-pharmaceutical-cleanrooms-sterile/)

[XRGo article post pfizer](https://www.sri.com/press/story/robots-in-the-cleanroom/)

**IRAD: Dextrous Manipulation**

One of my coworkers quit near the end of 2023 - as part of his responsibility handoff, he got me in contact with a researcher in our Computer Vision Technology group. Her research project was on using diffusion models to generate robot toolpaths for accomplishing tasks. Through 2024, I added all the interfaces and hardware tools she would need to implement her software through our teleoperation stack - so that it could be done from anywhere with an internet connection and piggy-back on our ongoing hardware support mission.

[This is the in-grip manipulation tool Shenli was working on, that I did the last touches on for the ](https://www.sri.com/press/story/sri-showcases-its-high-dexterous-robot-grasper-and-hand/)



