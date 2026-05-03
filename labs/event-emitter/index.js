const EventEmitter = require("events");

const bus = new EventEmitter();

bus.on(
  "file-uploaded",

  (payload) => {
    console.log(
      "log:",

      payload,
    );
  },
);

bus.on(
  "file-uploaded",

  (payload) => {
    console.log(
      "metrics:",

      payload,
    );
  },
);

bus.once(
  "file-uploaded",

  () => {
    console.log("once listener");
  },
);

bus.emit(
  "file-uploaded",

  {
    file: "video.mp4",
  },
);

bus.emit(
  "file-uploaded",

  {
    file: "image.png",
  },
);
