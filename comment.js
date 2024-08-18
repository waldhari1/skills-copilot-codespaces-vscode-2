// Create web server
// 1. Import express
// 2. Create express object
// 3. Create a route to handle GET request
// 4. Create a route to handle POST request
// 5. Create a route to handle PUT request
// 6. Create a route to handle DELETE request
// 7. Listen to port 3000
// 8. Run the server
// 9. Test the server
const express = require('express');
const app = express();
app.use(express.json());
const comments = [
    { id: 1, comment: 'Comment 1' },
    { id: 2, comment: 'Comment 2' },
    { id: 3, comment: 'Comment 3' }
];
app.get('/api/comments', (req, res) => {
    res.send(comments);
});
app.post('/api/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});
app.put('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    comment.comment = req.body.comment;
    res.send(comment);
});
app.delete('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// Run the server
// 1. Open terminal
// 2. Run the server
// 3. Test the server
// 4. Stop the server
// Open terminal
// Run the server
// Type node comment.js
// Test the server
// Open Postman
// Send GET request to http://localhost:3000/api/comments
// Send POST request to http://localhost:3000/api/comments
// Send PUT request to http://localhost:3000/api/comments