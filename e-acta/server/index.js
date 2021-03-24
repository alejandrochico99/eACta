const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("hello world")
});

app.listen(3001, ()=>{
    console.log("running on port 3001");
})

/*

Bodyparser is currently deprecated in Express 4 (NodeJS), urlencoded is already in the new version of express, t
the way to use urlencoded is using this line: app.use (express.urlencoded ({extended: false})); 
// false if you only want to pass flat text

*/


