require("dotenv").config();

const { Queue } = require("bullmq");

module.exports = new Queue(
  "cpu-jobs",

  {
    connection: {
      host: process.env.REDIS_HOST,

      port: process.env.REDIS_PORT,
    },
  },
);
