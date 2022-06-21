import Sequelize from 'sequelize';
import getUserModel from './user.js';
import getMessageModel from './message.js';

const sequelize = new Sequelize(
  process.env.EXPRESS_DEMO_DB_DATABASE_NAME,
  process.env.EXPRESS_DEMO_DB_USERNAME,
  process.env.EXPRESS_DEMO_DB_PASSWORD,
  {
    host: process.env.EXPRESS_DEMO_DB_HOST,
    port: process.env.EXPRESS_DEMO_DB_PORT,
    dialect: 'postgres',
  },
);

const models = {
  User: getUserModel(sequelize, Sequelize),
  Message: getMessageModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
