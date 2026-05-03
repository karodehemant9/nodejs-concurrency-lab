const data = [];

setInterval(
  () => {
    data.push({
      payload: "x".repeat(1000000),
    });

    const memory = process.memoryUsage();

    console.table({
      rss: Math.floor(memory.rss / 1024 / 1024) + " MB",

      heapUsed: Math.floor(memory.heapUsed / 1024 / 1024) + " MB",

      heapTotal: Math.floor(memory.heapTotal / 1024 / 1024) + " MB",
    });
  },

  1000,
);
