const { Comment } = require('../models');

const commentData = [

    {
      "content": "W3 schools never fails!!",
      "user_id": 3,
      "post_id": 1
    },
    {
        "content": "I totally agree! now you can build your own Facebook!",
        "user_id": 1,
        "post_id": 2
    },
    {
        "content": "Major CONGRATS!!!!!!!!!!",
        "user_id": 2,
        "post_id": 3
    }
  ]

  const seedComments = () => Comment.bulkCreate(commentData);
  module.exports = seedComments;

