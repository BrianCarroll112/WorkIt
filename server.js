const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const {
  userRouter
} = require('./routes/userRouter');
const {
  jobsRouter
} = require('./routes/jobsRouter');
const {
  companyRouter
} = require('./routes/companyRouter');
const {
  User,
  Job,
  Company
} = require('./models');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('hello workIt we are starting')
})

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use('/user', userRouter);
app.use('/jobs', jobsRouter);
app.use('/company', companyRouter);


app.listen(PORT, () => console.log(`up and running on port ${PORT}`));
