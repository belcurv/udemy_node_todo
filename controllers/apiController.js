var Todos = require('../models/todoModel'),
    bodyParser = require('body-parser');

module.exports = function(app) {
    
    // middleware
    app.use(bodyParser.json());  // parse JSON out of http request body
    app.use(bodyParser.urlencoded({ extended: true }));
    
    
    // get all todos for a specified user
    app.get('/api/todos/:uname', function(req, res) {
        
        // ':uname' is a param in the request
        Todos.find({ username: req.params.uname }, function (err, todos) {
            
            if (err) { throw err; }
            
            res.send(todos);
            
        });
        
    });
    
    
    // get single todo by id
    app.get('/api/todo/:id', function(req, res) {
        
        // ':id' is a param in the request
        Todos.findById({ _id: req.params.id }, function (err, todo) {
            
            if (err) { throw err; }
            
            res.send(todo);
            
        });
        
    });
    
    
    // add or update a todo
    app.post('/api/todo', function(req, res) {
        
        // if the request body has property 'id', assume it's an update
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo) {
                if (err) throw err;
                
                res.send('Success - todo updated');
            });
        }
        
        // otherwise, it's a new addition
        else {
            
            
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            
            newTodo.save(function(err) {
                if (err) throw err;
                res.send('Success - new todo saved');
            });
        }
        
    });
    
    
    // delete todo
    app.delete('/api/todo', function(req, res) {
        
        Todos.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success - todo deleted');
        });
        
    });
    
};