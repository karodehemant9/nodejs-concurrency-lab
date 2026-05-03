const express =
  require(
    "express"
  );


const app =
  express();


function cpuHeavy() {

  let total =
    0;


  for (

    let i = 0;

    i < 5e9;

    i++

  ) {

    total += i;
  }


  return total;
}


app.get(

  "/fast",

  (

    req,
    res

  ) => {

    res.send(
      "fast"
    );
  }
);


app.get(

  "/slow",

  (

    req,
    res

  ) => {

    cpuHeavy();


    res.send(
      "slow"
    );
  }
);


app.listen(

  5000,

  () => {

    console.log(
      "CPU lab started"
    );
  }
);