var configValues = require('./config.json');

module.exports = {
    
    getDbConnectionString: function() {
        
        // mongodb://<dbuser>:<dbpassword>@ds147079.mlab.com:47079/node-todo
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds147079.mlab.com:47079/node-todo';
        
    }
    
};