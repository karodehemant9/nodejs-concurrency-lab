const express = require("express");

const app = express();

const server = app.listen(
  6000,

  () => {
    console.log("Started");
  },
);

process.on(
  "SIGINT",

  () => {
    console.log("Shutting down...");

    server.close(() => {
      console.log("Closed");

      process.exit(0);
    });
  },
);
