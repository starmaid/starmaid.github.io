---
layout: post
title: Setting up a NAS on a Raspberry Pi
comments: false
tags: NAS wireguard vpn raspberrypi raspberry linux development
image:
  path: /projects/nas-setup_assets/nas.jpg
---

![image.](./nas-setup_assets/nas.jpg)

*Written October 2022*

This guide walks through ALL the steps for setting up a truly useful NAS (Network Attached Storage) with a Raspberry Pi on your network, wherever you live.

## Your Network

To determine feasibility, you need to know your network - *before* you start buying stuff.

### The Ideal Setup

- You live somewhere you buy your own internet (With a reasonable upload speed, like 100/100 fiber)
- Your ISP gives you a static IP address (or at least it doesnt change often)
- You have admin control of your router
- You have a cable ethernet port

You will have no trouble with any part of this instruction set.

### The 'Parent's House' Setup

- Your parents buy whatever internet they have
- You don't have admin control of your router
- You may or may not have a free ethernet port (you can change this if you want)

You might be using WiFi or something for this. Thats ok. There are a billion guides for how to set up a RPi on WiFi if you need it. For reference, heres the `/etc/wpa_supplicant/wpa_supplicant.conf` template I use.

```
country=US # Your 2-digit country code
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev

# Normal home WiFi
network={
    ssid="networkname"
    psk="password"
    key_mgmt=WPA-PSK
}

# Unsecured Wifi
network={
    ssid="networkname"
    key_mgmt=NONE
}

# University WiFi
network={
     ssid="networkname"
     key_mgmt=WPA-EAP
     identity="username"
     password="password"
}
```

you can save this file as `wpa_supplicant.conf` to the root of the `boot` directory after flashing the RPi's SD card to connect at first startup (if you get it right).

### The Dorm Setup

- You use internet provided by your housing
- The network is an enterprise-managed

You may have a saving grace here depending on your setup. Many universities got on the Internet Train early, and give each wired Ethernet port a unique, exposed, public IP address, for students to do cool things like this. Purdue offered this (when I was there) in at least Honors, TSS, and Shreve.  

Check your ethernet ports in the room. At each port, plug in a laptop, turn off the wifi, and search ["what is my IP?"](https://duckduckgo.com/?t=ffab&q=what+is+my+ip&ia=answer) on your search engine of choice. Then, from a different computer, try to reach that computer with something like a Ping or whatever. If you get a ping, maybe try something more adventurous, like an SSH.

If that doesnt work, your university might have a special process for this kind of thing. Stanford has a MAC address registration form. Others might have similar.

Some universities might not allow any public IP address for students. Eh. Do some experimentation, ask friends, ask IT.

## Your Hardware

The easiest way to set this up is with:

- Raspberry Pi 4B (because of the gigabit ethernet, and separate USB and Ethernet controllers) 
- The MicroSD flash card (High quality, 8GB or more) to run the Pi from
- A large flash drive (128 GB?)

If you know you're getting into larger capacities, maybe you look at a USB-SATA cable and a 2.5 in SSD, but this is easy. The drive lifetime may be like 2-3 years depending on how you run it, but by then you'll probably want to upgrade. This is a low barrier-to-entry method.

You may need an etherent cable and switch, depending on your network setup.

## Hostname

### Registration

For your VPN you are going to need a hostname. This just makes things easier for your future self.

You can buy domains from wherever. However, as a free and less-traceable option, I like to use [FreeDNS.afraid.org](https://freedns.afraid.org/).

1. Create an account/login

2. Go to the 'Registry' tab.
    
    Select a domain you like. You can check out the owners, choose one you like. This will be the thing that comes after the name you can create. Click the name of the domain to go to a prefilled 'Add Subdomain' page.
    
3. Create a type 'A' subdomain with a name you like.

    By default, freedns.afraid fills in the IP Address you are visitng from. If you are on the same network you are connecting the NAS to, this is helpful. If not, fill in the Public IP address you are going to use.

### Maintaining

If your ISP/dorm setup doesn't offer free Static IP Addresses, thats ok! FreeDNS.afraid has a method for setting up a cron script for periodically updating the subdomain registration. Go to [the dynamic DNS page](https://freedns.afraid.org/dynamic/) and navigate to your 'quick cron example' link for the subdomain you just created.

Save this script to your computer and wait until we have the Pi setup to install it.

## NAS Software

I use [Open Media Vault](https://www.openmediavault.org/). [Follow this guide.](https://wiki.omv-extras.org/doku.php?id=omv6:raspberry_pi_install) I'm not going to be able to write a better one than the people who made the dang software!

TLDR: 

1. Download [this image](https://downloads.raspberrypi.org/raspios_lite_arm64/images/raspios_lite_arm64-2022-01-28/2022-01-28-raspios-bullseye-arm64-lite.zip)

2. Flash it to an SD card

3. Put an empty file called `ssh` in the `boot` directory. Put your `wpa_supplicant.conf` file there too, if you're doing that.

4. SSH into it. This image still has the default `pi` and `raspberry` credentials.

5. Change the password.

6. Update and do this RPI3b thing, and reboot

    ```
    sudo apt-get update
    sudo apt-get upgrade -y
    sudo rm -f /etc/systemd/network/99-default.link
    sudo reboot
    ```

7. Reconnect SSH and run the installer.

    ```
    wget -O - https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash
    ```

Afterwards you can navigate to the server in a web browser and configure it how you like. You will have to

- Format and set your USB drive as a storage drive
- Enable SMB/FTP/whatever other services you want
- Set credentials for users etc.

## VPN Software

I use [PIVPN](https://pivpn.io/), which uses [Wireguard](https://www.wireguard.com/). 

### Installation

You're still SSH'd into that RPi, right?

```
curl -L https://install.pivpn.io | bash
```

Now you can use all the fun PIVPN commands

```
# figure out wtf youre doing
sudo pivpn -h

# add a client
sudo pivpn add

# show the status of an interface, or its configuration
sudo wg show wg0
sudo wg showconf wg0

sudo pivpn -c

sudo pivpn -r name
```

[Download the WireGuard VPN Client](https://www.wireguard.com/install/). Add a client for yourself. Add one for your phone.

### Monitoring

If you're like me, you like to share access to things. I have a few close people with VPN keys. But I like to know whos in my house. I have a cron script that reports who was connected and when. Its a work in progress. And by that i mean I used zero effort and will parse this into real output later, and add notifications.

in `/home/pi/logconn.sh`
```
#!/bin/bash

FILE="/home/pi/connections.log"

date >> $FILE
sudo wg show wg0 >> $FILE
echo "" >> $FILE
```

in crontab, run daily at midnight.
```
0 0 * * * sudo /home/pi/logconn.sh
```

## Connecting Devices

Once you have everything set up, you want to put some files on there!

### Computers

Sorry I only know about Windows and Linux. When youre on your home network? Just go to Local Network, and the hostname should show up.

![windows network discovery](./nas-setup_assets/win-network.png)

When you're connected to VPN, it might be different. By default, PIVPN will set `10.6.0.1` as the address for your VPN, which is also your NAS (remember?). Just map a network drive to that address.

### Phone

I use CX File Explorer on Android, which can connect to network file shares easily.

### FTP

I enabled FTP on my NAS, and set a separate share that allows only certain users to connect. Theres guides on how to use FTP.

```
ftp -i starmaid.us.to
public
starsfiles
binary
cd /Public/cyber
mget .
bye
```

```
wget -r ftp://public:starsfiles@starmaid.us.to/Public/cyber/
```