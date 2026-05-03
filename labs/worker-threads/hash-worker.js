const { parentPort, workerData } = require("worker_threads");

function heavyHash(limit) {
  let total = 0;

  for (let i = 0; i < limit; i++) {
    total += i;
  }

  return total;
}

const result = heavyHash(workerData.number);

parentPort.postMessage(result);
