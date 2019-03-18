const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  database: 'workit_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
    returning: true
  }
});
const User = sequelize.define('user', {
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  profile_pic: Sequelize.STRING,
  cv: Sequelize.STRING,
  bio: Sequelize.TEXT,
  job_title: Sequelize.STRING,
});
const Company = sequelize.define('company', {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  about: Sequelize.TEXT,
  link: Sequelize.STRING,
});
const Job = sequelize.define('job', {
  job_title: Sequelize.STRING,
  description: Sequelize.TEXT,
  employee_status: Sequelize.STRING,
  salary: Sequelize.INTEGER,
  experience_level: Sequelize.STRING,
  location: Sequelize.STRING,
});

// const Vouch = sequelize.define('vouch', {
// post-mvp
// });

Job.belongsTo(Company);
Company.hasMany(Job);

User.belongsTo(Company);
Company.hasMany(User);

module.exports = {
  User,
  Company,
  Job,
  sequelize,
};
