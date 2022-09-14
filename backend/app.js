const express = require('express');
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//CORS resolve
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });


app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added'
    });

});


app.get('/api/posts',(req, res, next) => {
 const posts = [
    { id: '', title: 'asc', content:'adbqah'},
    { id: '', title: 'ascasd', content:'adbqahasd'},
 ];
 res.status(200).json({
    message: 'Posts good',
    posts: posts
 });
});

module.exports = app;