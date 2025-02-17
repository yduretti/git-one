const express = require("express");
const os = require('os');

const app = express();

app.get("/", (req, res) => {
    
  const mySecret = process.env.MY_SECRET;
  console.log('The secret is:', mySecret);

  let resultado = "<h1 >FULL STACK TEST COMPLETED YD </h1><br><h2> secret: " + mySecret + " </h2><br> hostname: " + os.hostname()
  res.send(resultado);
  //res.json({ "celsius": celsius, "maquina": os.hostname() });
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});
