const settings = require('../cameras.config.json');
const Stream = require('node-rtsp-stream');
const Recorder = require('node-rtsp-recorder').Recorder;
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');

settings.cameras.forEach(c => {
    const streamUrl = 'rtsp://' + c.username + ':' + c.password + '@' + c.ip_address + ':554/profile1';

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

    // recorder object to record stream to file
    var rec = new Recorder({
        url: streamUrl,
        timeLimit: 10,
        name: c.alias,
    });

    const options = {
        id: c.id,
        hostname: c.ip_address,
        username: c.username,
        password: c.password,
    };

    rec.startRecording();
});

app.get('/', function(req, res) {
    res.render('index', { cameras: settings.cameras });
});

app.listen(port, () => console.log('App listening at http://localhost:' + port));