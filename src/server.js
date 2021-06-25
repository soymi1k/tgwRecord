const configs = require('../cameras.config.json');
const Stream = require('node-rtsp-stream');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');

configs.cameras.forEach(c => {
    new Stream({
        streamUrl: 'rtsp://' + c.username + ':' + c.password + '@' + c.ip_address + ':554/live/ch1',
        wsPort: c.websocket,
        width: 320,
        height: 200,
        ffmpegOptions: {
            '-r': 30,
            '-s': '320x200'
        }
    })
});

app.get('/', function(req, res) {
    res.render('index', { cameras: configs.cameras });
});

app.listen(port, () => console.log('App listening at http://localhost:' + port));