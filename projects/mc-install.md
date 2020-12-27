---
layout: post
title: Raspberry Pi Minecraft Install Script
tags: raspberrypi, rpi, minecraft, java, install
---

No nonsense here. This is my script to install and run Minecraft on a raspberry pi.

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