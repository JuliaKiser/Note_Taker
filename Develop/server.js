// What does this do: Sets up dependencies
const fs = require("fs");
const express = require("express");
const path = require('path');

// what does this do: Create Port connection
const app = express();
const PORT = process.env.PORT || 8080;

// What does this do: Create the express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// What does this do: serves files from public directory
app.use(express.static("public"));

// What does this do: Creates routes to html files

// return notes.html
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

// returns index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
// Listener
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
