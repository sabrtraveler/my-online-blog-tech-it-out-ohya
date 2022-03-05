const { User } = require('../models');

const userData = [
    {
        username: "mike_berry",
        twitter: "mikeb",
        github: "mikeb",
        email: "mike_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "mason_b",
        twitter: "masonb",
        github: "masonb",
        email: "mason_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "steve_c",
        twitter: "stevec",
        github: "stevec",
        email: "steve_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "larry_n",
        twitter: "larryn",
        github: "larryn",
        email: "larry_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "perry_r",
        twitter: "perry23",
        github: "perry23",
        email: "perry_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "peter",
        twitter: "peter_w",
        github: "peterw",
        email: "peter_w@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;