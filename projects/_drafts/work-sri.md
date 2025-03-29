
**SynFini Chemistry Automation**

[SRI Press release - November 2021](https://www.sri.com/platform/synfini/)

Where they started: in 2021, the SynFini lab was just starting to do [commercial work for clients](https://www.sri.com/press/press-release/sri-international-enters-drug-discovery-and-research-collaboration-with-sanofi/) that expected target molecules, instead of a co-development proof of concept. Several new chemists had been hired, and they were expected to run the system and approach high throughput. While they did this, the hardware and software would need maintenance and upgrades - this is where I came in.

*Maintaining and Upgrading Software*: This was primary - 

- FANUC robot programming
- C++ and C# interfacing with hardware, rebuilding and deploying in lab
- rebuilding and deploying docker to hardware in lab
- diagnosing networking issues, finding out SRI IT had changed things, DNS records, firewalls, etc.
- connections and certificates, renewing and generating

*Maintaining Hardware*: The first critical thing I had to do was maintain hardware. By August 2022, I now had a second engineer who would focus on these, but for the first almost-year I was responsible.

- All Synfini devices
- Vacuum pumps
- Speedvac
- Rotovap
- HPLC pumps

*Improve Safety*: One thing that would periodically come up during operations was safety - either I would have a problem with something, our EH&S officer would have a problem, or an operator would feel unsafe.

- Modifying and implementing fume hoods
- Cases and panels, wiring

*Power outage protection*: 

- UPS device on everything
- Softstarts on pumps




[SRI Spinout Announcement - September 2023](https://www.sri.com/biomedical-sciences/sri-spins-off-ai-powered-drug-discovery-platform-synfini-inc/)

[The new startup website](https://synfini.com/)

**Taurus Robot**


**Medical Devices Corner - MRI Robot**

[MDC Inc.](https://www.meddevcorner.com/) is a startup created by three Stanford grad students - the core idea is a [hydraulically-actuated robot for teleoperation inside an MRI bore](https://patents.google.com/patent/WO2024086666A1/en). They are in residence at SRI, both for renting lab and office space, but also for co-development and other venture assistance. Early on, I was asked to help with the creation of an Unreal Engine-based simulator for their robot. Additionally, I worked on a visualizer that used instanced geometry to render voxel clouds of live-updating MRI data as it was captured by a machine, so an operator in VR could take arbitrary slices of data 