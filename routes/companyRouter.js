const express = require('express');
const {
  Company
} = require('../models');
const companyRouter = express.Router();
const {
  restrict
} = require('./auth');

//test
companyRouter.use((req, res, next) => {
  console.log('who own all these jobs??');
  next();
});

//find company by id
companyRouter.get('/:id', restrict, async (req, res) => {
  try {
    const id = req.params.id;
    const company = await Company.findByPk(id);
    res.json(company)
  } catch (e) {
    res.status(error).send(e.message);
  }
});


module.exports = {
  companyRouter
};
