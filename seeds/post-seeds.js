const { Post } = require('../models');

const postData = [
    {
        title: "The sun had set and so had his dreams.",
        post_content: "There is no better feeling than staring at a wall with closed eyes. Nobody questions who built the pyramids in Mexico.",
        user_id: 3
    },
    {
        title: "Dolores wouldn't have eaten the meal if she had known what it actually was.",
        post_content: "Plans for this weekend include turning wine into water. He shaved the peach to prove a point.",
        user_id: 1
    },
    {
        title: "The llama couldn't resist trying the lemonade.",
        post_content: "She was too short to see over the fence. My biggest joy is roasting almonds while stalking prey.",
        user_id: 2

    },
    {
        title: "There's a message for you if you look up.",
        post_content: "Potato wedges probably are not best for relationships. Everything was going so well until I was accosted by a purple giraffe.",
        user_id: 5
    },
    {
        title: "Her daily goal was to improve on yesterday.",
        post_content: "She wanted to be rescued, but only if it was Tuesday and raining. Patricia loves the sound of nails strongly pressed against the chalkboard.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;