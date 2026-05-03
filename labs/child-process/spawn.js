const {
  spawn
} = require(
  "child_process"
);


const child =

  spawn(

    "node",

    [

      "--version"
    ]
  );


child.stdout.on(

  "data",

  (

    data

  ) => {

    console.log(

      "stdout:",

      data
        .toString()
    );
  }
);


child.stderr.on(

  "data",

  (

    data

  ) => {

    console.log(

      "stderr:",

      data
        .toString()
    );
  }
);


child.on(

  "close",

  (

    code

  ) => {

    console.log(

      "exit:",

      code
    );
  }
);