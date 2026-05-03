const buffers = [];

setInterval(
  () => {
    buffers.push(Buffer.alloc(10 * 1024 * 1024));

    const memory = process.memoryUsage();

    console.table({
      rss: Math.floor(memory.rss / 1024 / 1024) + " MB",

      heapUsed: Math.floor(memory.heapUsed / 1024 / 1024) + " MB",
    });
  },

  1000,
);
