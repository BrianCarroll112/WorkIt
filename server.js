const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const {
  userRouter
} = require('./routes/userRouter');
const {
  User
} = require('./models');

const PORT = process.env.port || 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('hello workIt we are starting')
})

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/user', userRouter);


app.listen(PORT, () => console.log(`up and running on port ${PORT}`));
