require("dotenv").config();

const { Worker } = require("bullmq");

const { Worker: Thread } = require("worker_threads");

const path = require("path");

const logger = require("../../shared/logger");

new Worker(
  "cpu-jobs",

  async (job) => {
    return new Promise((resolve, reject) => {
      const worker = new Thread(
        path.join(
          __dirname,

          "../worker-threads/hash-worker.js",
        ),

        {
          workerData: job.data,
        },
      );

      worker.on(
        "message",

        (result) => {
          logger.info({
            message: "CPU job completed",

            result,
          });

          resolve(result);
        },
      );

      worker.on(
        "error",

        reject,
      );
    });
  },

  {
    connection: {
      host: process.env.REDIS_HOST,

      port: process.env.REDIS_PORT,
    },
  },
);
