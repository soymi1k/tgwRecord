const configs = require('../cameras.config.json');
const Stream = require('node-rtsp-stream');
const onvifEvents = require('node-onvif-events');
const Recorder = require('node-rtsp-recorder').Recorder;
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');

configs.cameras.forEach(c => {
    const streamUrl = 'rtsp://' + c.username + ':' + c.password + '@' + c.ip_address + ':554/live/ch1';

    // ffmpeg stream for viewing in browser canvas
    new Stream({
        streamUrl,
        wsPort: c.websocket,
        width: 320,
        height: 200,
        ffmpegOptions: {
            '-r': 30,
            '-s': '320x200'
        }
    })

    if (c.onvif) {
        // recorder object to record stream to file
        var rec = new Recorder({
            url: streamUrl,
            timeLimit: 60,
            folder: '../motion_captures',
            name: c.id,
        });

        const options = {
            id: c.id,
            hostname: c.ip_address,
            username: c.username,
            password: c.password,
            port: c.onvif
        };

        const startMotion = async () => {
            const detector = await onvifEvents.MotionDetector.create(options.id, options);
            detector.listen(motion => {
                if (motion) {
                    console.log(new Date(), '>> Motion Detected');
                    rec.startRecording();
                } else {
                    console.log(new Date(), '>> Motion Stopped');
                    rec.stopRecording();
                }
            });
        };

        startMotion();
    }
});

app.get('/', function(req, res) {
    res.render('index', { cameras: configs.cameras });
});

app.listen(port, () => console.log('App listening at http://localhost:' + port));