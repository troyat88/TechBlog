const { User } = require('../models');

const userData = [
    {
      "username": "Sal",
      "email": "sal@hotmail.com",
      "password": "pwsal"
    },
    {
      "username": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "pwlern"
    },
    {
      "username": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "pwami"
    }
]  
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
