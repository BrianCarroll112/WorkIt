const express = require('express');
const {
  Job
} = require('../models');
const jobsRouter = express.Router();
const {
  restrict
} = require('./auth');

//test
jobsRouter.use((req, res, next) => {
  console.log('i want to see some jobs already!!!');
  next();
});

//find job by id
jobsRouter.get('/:id', restrict, async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Job.findByPk(id);

    if (job.userId !== parseInt(res.locals.user.id)) {
      res.status(401).send('Unauthorized');

    } else {
      res.json(job)
    }
  } catch (e) {
    res.status(error).send(e.message);
  }
});

//find all jobs
jobsRouter.get('/', restrict, async (req, res) => {
  try {
    const jobs = await Job.findAll();

    if (jobs.userId !== parseInt(res.locals.user.id)) {
      res.status(401).send('Unauthorized');

    } else {
      res.json(jobs)
    }
  } catch (e) {
    res.status(error).send(e.message);
  }
});

module.exports = {
  jobsRouter
};
