const { fork } = require("child_process");

const path = require("path");

const child = fork(
  path.join(
    __dirname,

    "fork-child.js",
  ),
);

child.send({
  number: 10,
});

child.on(
  "message",

  (message) => {
    console.log(message);
  },
);
