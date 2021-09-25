const { Post } = require('../models');

const postData = [

    {
      "title": "JavaScript Woes",
      "content": " I just can't get a handle on JS functions and loops. Please send your favorite resources ASAP!!!",
      "user_id": 1
    },
    {
      "title": "Loving MVC",
      "content": "It has been really great seeing how the front end is connected to backend via frameworks like Handlebards!!",
      "user_id": 2
    },
    {
      "name": "First Job",
      "content": "I officially feel like a real developer. I was just hired to join a team for an online school!!!!!!!!!",
      "user_id": 3
    }
  ]

  const seedPosts = () => Post.bulkCreate(postData);
  module.exports = seedPosts;