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
        const {
          password_digest,
          ...userData
        } = user.dataValues

        res.json(userData);

        } catch(e) {
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
          password
        } = req.body;
        const pd = await hash(password);

        const newUser = {
          email,
          password_digest: pd,
          first_name,
          last_name,
          profile_pic: 'Add a picture',
          cv: null,
          bio: 'Add a bio',
          job_title: 'Add a job'
        }

        const createdUser = await User.create(newUser);
         const {
           password_digest,
           cv,
           profile_pic,
           bio,
           ...user
         } = createdUser.dataValues;

        const token = await encode(user);
        res.json({
          token,
          id: createdUser.dataValues.id
        });
      } catch (e) {
        console.error(e);
        res.status(500).json(e.message);
      }
    });

    //login
    userRouter.post('/login', async (req, res) => {
      try {
        const {
          email,
          password
        } = req.body;
        const loggedUser = await User.findOne({
          where: {
            email
          }
        });
        if (loggedUser !== null) {
          const authenticated = await compare(password, loggedUser.dataValues.password_digest);
          if (authenticated == true) {
            let {
              email,
              first_name,
              last_name,
              profile_pic,
              cv,
              bio,
              job_title,
              id
            } = loggedUser.dataValues;

            const user = {
              email,
              first_name,
              last_name,
              job_title,
              id
            };
            const token = await encode(user);
            res.json({
              token,
              id: user.id
            });
          }
        }
      } catch (e) {
        console.log(e);
        res.status(401).json(e.message);
      }
    });

    //edit profile
    userRouter.put('/:id', restrict, async (req, res, next) => {
          try {
            const id = req.params.id;
            const userProfil = await User.findByPk(id);
            if (userProfil.dataValues.id !== res.locals.user.id) {
              res.status(401).send('Unauthorized');

            } else {
              await userProfil.update(req.body);
              res.json({
                userProfil
              })}
            } catch (e) {
              next(e);
            }
          });


      //delete profile
      userRouter.delete('/:id', restrict, async (req, res, next) => {
        try {
          const id = req.params.id;
          const userDelete = await User.findByPk(id);

          if (userDelete.dataValues.id !== res.locals.user.id) {
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


      module.exports = {userRouter};
