const sequelize = require('../config/connection');
//const { User, Post, Comment } = require('../models');

const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPosts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();




