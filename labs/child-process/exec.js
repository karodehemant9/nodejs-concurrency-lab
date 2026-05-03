const { exec } = require("child_process");

exec(
  "node --version",

  (
    error,

    stdout,

    stderr,
  ) => {
    console.log(stdout);
  },
);
