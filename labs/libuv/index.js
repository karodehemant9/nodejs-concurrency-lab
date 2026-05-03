const crypto = require("crypto");

for (let i = 0; i < 8; i++) {
  crypto.pbkdf2(
    "password",

    "salt",

    100000,

    512,

    "sha512",

    () => {
      console.log(
        "done:",

        i,
      );
    },
  );
}
