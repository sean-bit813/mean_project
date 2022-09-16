const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
//SMQltVrMyZf6WtGA

const Post = require('./models/post');
var ObjectId = require('mongodb').ObjectID;

mongoose.connect("mongodb+srv://Baohui:SMQltVrMyZf6WtGA@cluster0.oengktb.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log("connected to db")
})
.catch(()=>{
  console.log("failed")
})

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
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then(result => {
    res.status(201).json({
        message: 'Post added',
        postId: result._id
    });
  });
});


app.get('/api/posts',(req, res, next) => {
  Post.find()
  .then(documents => {
    res.status(200).json({
    message: 'Posts good',
    posts: documents
 });
  });
});

app.delete("/api/posts/:id",  (req, res, next) =>{
  console.log(req.params.id);
  Post.deleteOne({_id: ObjectId.createFromHexString(req.params.id)}).then(result => {
    console.log(result);
    res.status(200).json({message: 'Post deleted'});
  });
})


module.exports = app;