const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const blog = require('./data/blog.json')

app.get('/',(req, res)=>{
    res.send('Education API is running')
});

app.get('/courses', (req, res)=>{
    res.send(courses);
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const selectCourse = courses.find(course => course._id === id);
    res.send(selectCourse);
})

app.get('/blog', (req, res)=>{
    res.send(blog)
})

app.listen(port,()=>{
    console.log(`Education server running on port: ${port} `)
})