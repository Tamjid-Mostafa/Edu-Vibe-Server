const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const course = require('./data/course.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Course api running');
});

app.get('/courses', (req, res) => {
    res.send(course)
});



app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n.id === id);
    res.send(selectedCourse);
});
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCheckout = course.find(n => n.id === id);
    res.send(selectedCheckout);
});

app.listen(port, () => {
    console.log('Course list', port);
})