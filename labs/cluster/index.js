const cluster = require("cluster");

const os = require("os");

const express = require("express");

const cpuCount = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Master ${process.pid}`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on(
    "exit",

    (worker) => {
      console.log(`Worker ${worker.process.pid} died`);

      console.log("Restarting...");

      cluster.fork();
    },
  );
} else {
  const app = express();

  app.get(
    "/",

    (req, res) => {
      res.send(`Handled by ${process.pid}`);
    },
  );

  app.listen(
    4000,

    () => {
      console.log(`Worker started ${process.pid}`);
    },
  );
}
