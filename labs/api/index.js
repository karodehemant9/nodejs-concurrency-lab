require("dotenv").config();

const express = require("express");

const queue = require("../bullmq/queue");

const logger = require("../../shared/logger");

const app = express();

app.get(
  "/hash",

  async (req, res) => {
    const number = Number(req.query.n);

    await queue.add(
      "hash-job",

      {
        number,
      },
    );

    logger.info({
      message: "Job queued",

      number,
    });

    res.send("Job queued");
  },
);

app.listen(
  process.env.PORT,

  () => {
    logger.info({
      message: "API started",
    });
  },
);
