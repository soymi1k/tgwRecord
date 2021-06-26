# Streaming IP Camera Nodejs

Open source project of real time streaming (~30 fps) IP/Network security camera on web browser using NodeJS. Records streams to files on disk when motion events occur.

<img src="https://raw.githubusercontent.com/ochsec/Streaming-IP-Camera-Nodejs/master/screenshot.png" alt="screenshot" width="600" />

## Getting Started

These instructions will get you a copy of the project to make it up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* [Git](https://git-scm.com/downloads) - free and open source distributed version control system 
* [Node.js](https://nodejs.org/en/) - Node.js >= 10.15.0
* [FFmpeg](https://ffmpeg.zeranoe.com/builds/) - Multimedia framework to decode, encode, transcode, mux, demux, stream, filter and play
* [ImageMagick](https://imagemagick.org) - Free and open source cross-platform software suite for displaying, creating, converting, modifying and editing raster images.

### Installing

A step by step series of examples that tell you how to get a development up and running

1. Download Git
* [Git](https://git-scm.com/downloads)
2. Open <strong>command prompt/terminal</strong>, Clone this repository to your local machine
```
git clone https://github.com/xpcrts/Steaming-IP-Camera-Nodejs
```
3. Download and install Node.js on your local machine
* [Node.js](https://nodejs.org/en/) - Node.js >= 10.15.0
4. Download and install pre-build FFMPEG Builds on your local machine (Download Build)
* [FFmpeg](https://ffmpeg.zeranoe.com/builds/) - Multimedia framework to decode, encode, transcode, mux, demux, stream, filter and play<br />
* [ImageMagick](https://imagemagick.org/script/download.php) - Free and open source cross-platform software suite for displaying, creating, converting, modifying and editing raster images.
* Copy the FFMPEG Zip folder you have just downloaded, paste it into C: drive for simplicity and unzip it.
* Rename the file to <strong>ffmpeg</strong> for simpicity
* After unzipped the file, navigate ffmpeg/bin <br/>
#### On Microsoft Windows
You need to add ffmpeg to <strong>system variables</strong> (For all users) or <strong>User variables</strong> (For specific user)<br />
For research and test, I recommend to add the ffmpeg path to the <strong>system variables</strong> to do that just navigate to:<br/>
a. Control Panel<br/>
b. System and Security<br/>
c. System <br/>
d. Advanced system settings<br/>
e. Environment Variables...<br/>
f. System variables<br/>
g. Path (Double-click on it)<br/>
h. New<br/>
i. Paste this
```C:\ffmpeg\bin```<br/>
j. OK (3 times)<br /><br/>
5. NPM install node-onvif<br/><s>npm install node-onvif -s</s> Use node-onvif included in this repo<br/>
6.NPM install node-rtsp-stream<br/><s>npm i node-rtsp-stream -s</s> Use node-rtsp-stream included in this repo<br/>
7. Change directory to /src and install node packages for Express.js server
```
cd /src
npm i
```

## Running the server

1. Create a file called cameras.config.json in the root of the project and create an array of camera config objects that includes camera IP address, camera username, camera password and a unique websocket number (see cameras.example.json)
2. Change directory to source. After installing node packages (Step 7 above), preview streaming cameras by typing
```
node server.js
```
and visit [http://localhost:3000](http://localhost:3000]) in a web browser.

You are ready to go.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/xpcrts/Steaming-IP-Camera-Nodejs/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## To-dos

* Streaming Multiple camera channels at once, using 4x4 grid or more
* Customize width and height of canvas
* Improve streaming resolution quality
* Decrease streaming latency 

## Authors

* Original code by **Phok Chanrithisak** - [xpcrts](https://github.com/xpcrts)
* **Christopher Ochsenreither** -[ochsec](https://github.com/ochsec)

See also the list of [contributors](https://github.com/xpcrts/Steaming-IP-Camera-Nodejs/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/xpcrts/Steaming-IP-Camera-Nodejs/blob/master/LICENSE) file for details

## Acknowledgments

* Credit to: Celalettin Erbulut

