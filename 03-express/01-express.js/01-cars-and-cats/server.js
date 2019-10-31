const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.get('/', (request, response) => {
   response.send("My First Express Server");
});
app.listen(8000);