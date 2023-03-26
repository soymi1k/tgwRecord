const Service = require('node-windows').Service

const svc = new Service({
    name: "ipcamRecordServer",
    description: "TGW 번호판 인식 카메라 녹화 서비스 입니다.",
    script: "need location of server.js"
})

svc.on('install', function() {
    svc.start()
})

svc.install