const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhinavsharma392:q2mp6ENksrrMG4HH@cluster0.siez3ev.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
     todo
}