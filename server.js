const express = require("express");

//Init express app
const app = express();

//Init Middleware
app.use(express.json());

//Connect Routes
app.use("/convert", convert);

//Declare PORT var, fallback to PORT 5000 if environment port is not found
const PORT = process.env.port || 5000;

//Run server
app.listen(PORT, console.log(`server listening on port ${PORT} `));
