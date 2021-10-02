# gif-chat

## dependencies

1. express-session

세션 관리용 미들웨어로 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 매우 유용하다. 세션은 사용자별로 req.session 객체 안에 유지되니다.

2. morgan

기존 로그 외에 추가적인 로그를 볼 수 있다. 인수로 dev 외에 combined, common, tiny 등을 넣을 수 있다. 개발환경에서는 dev, 배포 환경에서는 combined를 추천한다.

3. nunjucks

퍼그의 HTML 문법 변화에 적응하기 힘든 사람을 위해 만든 템플릿 엔진으로 모질라에서 개발되엇고 HTML 문법을 그대로 사용하되 추가로 JS 문법을 사용할 수 있고, 파이썬 템플릿 엔진인 Twig와 문법이 유사하다.



