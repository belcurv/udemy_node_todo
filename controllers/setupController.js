var Todos = require('../models/todoModel');

// export a function. We pass our express app into it when we
// require this controller
module.exports = function(app) {
    
    app.get('/api/setupTodos', function(req, res) {
        
        // seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn NodeJS',
                isDone: false,
                hasAttachment: false
            }
        ];
        
        // jam it into db
        Todos.create(starterTodos, function(err, results) {
            
            res.send(results);
            
        });
        
    });
    
};