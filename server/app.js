//server start file
const express = require('express');
const session = require('express-session');
const SessionFileStore = require('session-file-store')(session);
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');

const indexRouter = require('./routes/index.router');

const app = express();
app.use(helmet());

dotenv.config();

const {
  PORT = 5001,
  SESSION_SECRET = process.env.SESSION_SECRET ? process.env.SESSION_SECRET : "secret",
} = process.env;
const sessionConfig = {
  store: new SessionFileStore(),
  name: 'user_sid',
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

const corsOptions = {
  origin: ['http://localhost:3000','http://localhost:5001'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(session(sessionConfig)); // подключение сессии
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true })) // читать данные из тела запроса
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
