const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/',(req, res)=>{
    res.send('Education API is running')
});

app.get('/courses', (req, res)=>{
    res.send(courses);
})

app.listen(port,()=>{
    console.log(`Education server running on port: ${port} `)
})