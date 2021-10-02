const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();
const webSocket = require('./socket');
const indexRouter = require('./routes');
const { parentPort } = require('worker_threads');

const app = express();
app.set('port', process.env.PORT);
app.set('view engine', 'html');

nunjucks.configure('views', {
  express: app,
  watch: true, // html 파일이 변경될 때 템플릿 엔진을 재 렌더링함.
});

// server settings

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

// error 처리

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// server 연결

const server = app.listen(app.get('port'), () => {
  console.log(app.get('port'), ' 번 포트에서 대기중');
});

webSocket(server);
