const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://_________________@cluster0.siez3ev.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
     todo
}
