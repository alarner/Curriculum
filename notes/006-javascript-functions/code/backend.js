const express = require("express");
const app = express();
const port = 3000;

function hello(req, res) {
  const result = parseFloat(req.query.num1) + parseFloat(req.query.num2);
  res.send(
    `<strong onClick='alert("hello codefriends")'>Hello CodeFriends!</strong> ` +
      result
  );
}

app.get("/", hello);

app.listen(port);
