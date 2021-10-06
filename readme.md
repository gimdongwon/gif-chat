# gif-chat

## dependencies

1. express-session

세션 관리용 미들웨어로 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 매우 유용하다. 세션은 사용자별로 req.session 객체 안에 유지되니다.

2. morgan

기존 로그 외에 추가적인 로그를 볼 수 있다. 인수로 dev 외에 combined, common, tiny 등을 넣을 수 있다. 개발환경에서는 dev, 배포 환경에서는 combined를 추천한다.

3. nunjucks

퍼그의 HTML 문법 변화에 적응하기 힘든 사람을 위해 만든 템플릿 엔진으로 모질라에서 개발되엇고 HTML 문법을 그대로 사용하되 추가로 JS 문법을 사용할 수 있고, 파이썬 템플릿 엔진인 Twig와 문법이 유사하다.

4. ws

wss에서 readyState는 4가지가 있다.

1. CONNECTING
2. OPEN
3. CLOSING
4. CLOSED

OPEN일 때만 에러없이 메시지를 보낼 수 있고 확인 후 ws.send 메서드로 하나의 메시지를 보낸다. cloase 이벤트에서 setInterval을 clearInterval로 정리해야 메모리 누수를 방지할 수 있다.

5. body-parser

는 업데이트로 express 기본 기능에 포함되며 express.json()으로 선언하여 사용한다

## 핵심정리

- 웹 소켓과 HTTPS는 같은 포트를 사용할 수 있으므로 따로 포트를 설정할 필요가 없다.
- 웹 소켓은 양방향 통신이므로 서버뿐만 아니라 프론트엔드 쪽 스크립트도 사용해야 한다.
- Socket.IO를 사용하면 웹 소켓을 지원하지 않는 브라우저에서까지 실시간 통신을 구현할 수 있다.
- Socket.IO 네임스페이스와 방 구분을 통해 실시간 데이터를 필요한 사용자에게만 보낼 수 있다.
- app.set('io', io)로 소켓 객체를 익스프레스와 연겨랗고, req.app.get('io')로 라우터에서 소켓 객체를 가져오는 방식을 기억해두자.
- 소켓 통신과 함께 데이터베이스 조작이 필요한 경우, 소켓만으로 해결하기 보다는 HTTP 라우터를 거치는 것이 관리에 유용하다.
