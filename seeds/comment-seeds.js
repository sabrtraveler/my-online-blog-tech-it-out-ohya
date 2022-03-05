const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This looks great!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "This makes my insides jump around in the best way!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "The creators have a good head on their shoulders!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "This is irresistable!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is really something special!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "This is like a breath of fresh air!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This is one of a kind!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;