const Sequelize = require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
  console.log('called');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    logging:  true,
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: 'workit_db',
    dialect: 'postgresql',
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
}

const User = sequelize.define('user', {
  email: { type: Sequelize.STRING, unique: true },
  password_digest: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  profile_pic: Sequelize.TEXT,
  cv: Sequelize.TEXT,
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
