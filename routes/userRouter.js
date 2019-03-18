const express = require('express');
const {
  User
} = require('../models');
const userRouter = express.Router();
const {
  compare,
  hash,
  encode,
  verify,
  restrict
} = require('./auth');

//test
userRouter.use((req, res, next) => {
  console.log('get me some jobs');
  next();
});

//get user page
userRouter.get('/:id', restrict, async (req, res) => {
      try {
        const id = req.params.id;
        const user = await User.findByPk(id);

        if (user.userId !== parseInt(res.locals.user.id)) {
          res.status(401).send('Unauthorized');

        } else {
          res.json(user)
        } catch (e) {
          res.status(error).send(e.message);
        }
      });

    //register
    userRouter.post('/', async (req, res) => {
      try {
        const {
          email,
          first_name,
          last_name,
          profile_pic,
          cv,
          bio,
          job_title
        } = req.body;
        const password_digest = await hash(passord);

        const newUser = {
          email,
          password_digest,
          first_name,
          last_name,
          profile_pic,
          cv,
          bio,
          job_title
        }

        const user = await User.create(newUser);

        const userData = {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          profile_pic: 'Add a picture',
          cv: 'Add a cv',
          bio: 'Add a bio',
          job_title: 'Add a job'
        }
        res.json({
          userData
        });

        const token = await encode(userData);
        res.json({
          token,
          user: userData
        });
      } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
      }
    });

    //login
    userRouter.post('/login', async (req, res) => {
      try {
        const {
          email,
          password
        } = req.body;
        const user = await User.findOnd({
          where: {
            email
          }
        });

        if (user !== null) {
          const authenticated = await compared(password, user);
          if (authenticated == true) {
            const userData = {
              email: user.email,
              id: user.id
            };
            const token = await encode(userData);
            res.json({
              token,
              user: userData
            });
          }
        }
      } catch (e) {
        console.log(e);
        res.status(401).send('Invalid Credentials');
      }
    });

    //edit profile
    userRouter.put('/:id', restrict, async (req, res, next) => {
        try {
          const id = req.params.id;
          const userProfil = await User.findByPk(id);

          if (userProfil.userId !== parseInt(res.locals.user.id)) {
            res.status(401).send('Unauthorized');

          } else {
            await userProfil.update(req.body);
            res.json({
              userProfil
            })
          } catch (e) {
            next(e);
          }
        });

      //delete profile
      userRouter.delete(':id', restrict, async (req, res, next) => {
        try {
          const id = req.params.id;
          const userDelete = await User.findByPk(id);

          if (userDelete.userId !== parseInt(res.locals.user.id)) {
            res.status(401).send('This is not you!!');

          } else {
            await userDelete.destroy();
            res.json({
              msg: 'ok, you have been deleted'
            });
          }
        } catch (e) {
          next(e);
        }
      });


      module.exports = userRouter;
