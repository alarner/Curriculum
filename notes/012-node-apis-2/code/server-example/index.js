const express = require("express");
const app = express();

const fruits = ["orange", "apple", "mango", "banana", "strawberry"];

app.get("/", (request, response) => {
  console.log("ran the function");
  response.send(`{"foo":"bar"}`);
});

app.get("/fruit/:id", (request, response) => {
  console.log("test", request.query);
  const plural = request.query.plural;
  let fruit = fruits[request.params.id - 1];
  if (plural === "true") {
    fruit += "s";
  }
  //   response.send(`<html><body><strong>orange</strong> ${Math.random()}</body>`);
  response.send(fruit);
});

app.get("/foo", () => {
  console.log("ran the function 'foo'");
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
