const fs = require("fs");

const readStream = fs.createReadStream(
  "large-file.bin",

  {
    highWaterMark: 64 * 1024,
  },
);

const writeStream = fs.createWriteStream("copy.bin");

readStream.on(
  "data",

  (chunk) => {
    console.log(
      "chunk:",

      chunk.length,
    );
  },
);

readStream.pipe(writeStream);
