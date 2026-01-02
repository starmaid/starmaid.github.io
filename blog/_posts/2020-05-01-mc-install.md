---
layout: post
title: Raspberry Pi Minecraft Install Script
tags: raspberrypi, rpi, minecraft, java, install
category: project
---

Written May 2020

No nonsense here. This is my script to install and run Minecraft on a raspberry pi.

I made this into its own script after starting from scratch on a third RPI while moving apartments, repurposing the hardware for different projects, and getting frustrated with setups. I figured I would make things easy on myself and just copy my bash history into a file i could transfer over to whatever device I was using at the time.

The best place to start is with a fresh install of [Raspberry Pi OS Lite](https://www.raspberrypi.org/software/operating-systems/#raspberry-pi-os-32-bit) (with no GUI). Download the latest version, flash it with your disk imager of choice, and log in. You can then use a SCP client to transfer a .sh file with this content, or just copy and paste the below text into your terminal.

You will also have to configure your network. You can connect to wifi or ethernet, and will then need to know the IP address or hostname of this device. You can set a static IP either by setting an IP in the router or setting a static IP on the RPI and making sure the router does not automatcally assign other users to this IP. Or, you can run the command `hostname -I` every time you start up this server and use that.

Do note that the version of SpigotMC's "Last Successful Build" will change, so by default this grabs the latest Minecraft server version. I Might make an updated version of this script that detects which version got downloaded, but for now you just have to change that line manually.

Also, remember this does not include any client for PLAYING Minecraft. You will have to use your own computer and have purchased Minecraft to play.

```bash
#!/bin/bash
# minecraft install script

# update
sudo apt-get update
sudo apt-get upgrade

# install java and git
sudo apt-get install default-jre git screen -y

# make a folder and go there
mkdir minecraft
cd minecraft

# download buildtools
sudo wget https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar

# run it
sudo java -Xmx1024M -jar BuildTools.jar

# sign the eula
touch ./eula.txt
echo eula=true > ./eula.txt

# make a start.sh script in the minecraft directory
touch start.sh
echo "cd /home/$USER/minecraft" >> start.sh

# youll have to change this for whatever version is most recent
# also for how much ram you have in the -Xmx____M flag
START_CMD="java -jar -Xmx1024M ./spigot-1.16.4.jar"

# create a file to use later
echo $START_CMD >> start.sh
sudo chmod +x ./start.sh

# run the server
$START_CMD
```