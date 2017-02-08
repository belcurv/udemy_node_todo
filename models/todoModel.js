var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    todoSchema = new Schema(
        {
            username: String,
            todo: String,
            isDone: Boolean,
            hasAttachment: Boolean
        }
    ),
    Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
