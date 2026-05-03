process.on(
  "message",

  (data) => {
    process.send({
      result: data.number * 2,
    });
  },
);
