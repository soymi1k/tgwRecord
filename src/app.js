const configs = require('../cameras.config.json');
const Stream = require('node-rtsp-stream');

configs.cameras.forEach(c => {
    new Stream({
        streamUrl: 'rtsp://' + c.username + ':' + c.password + '@' + c.ip_address + ':554/live/ch1',
        wsPort: c.websocket,
        ffmpegOptions: {
            '-r': 30
        }
    })
});
