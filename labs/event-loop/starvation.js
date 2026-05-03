let count = 0;

function loop() {
  count++;

  if (count % 100000 === 0) {
    console.log(count);
  }

  process.nextTick(loop);
}

setTimeout(
  () => {
    console.log("timer");
  },

  0,
);

loop();
