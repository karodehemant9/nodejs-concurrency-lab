console.log("1. sync start");

setTimeout(
  () => {
    console.log("6. timer");
  },

  0,
);

setImmediate(() => {
  console.log("7. immediate");
});

Promise.resolve()

  .then(() => {
    console.log("4. promise");
  });

process.nextTick(() => {
  console.log("3. nextTick");
});

require("fs").readFile(
  __filename,

  () => {
    console.log("8. I/O callback");
  },
);

console.log("2. sync end");
