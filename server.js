const WebSocket = require('ws');

modele.exports = () => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws, req) => {
    // websocket 연결시
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('새로운 클라이언트 접속 ', ip);
    ws.on('message', (message) => {
      console.log(message);
    });
    ws.on('error', (error) => {
      console.error(error);
    });
    ws.on('close', () => {
      console.log('클라이언트 접속 해제 ', ip);
      clearInterval(ws.interval);
    });
    ws.interval = setInterval(() => {
      if (ws.readyState === ws.OPEN) {
        ws.send('서버에서 클라이언트로 메시지를 보낸다.');
      }
    }, 3000);
  });
};
