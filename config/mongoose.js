const mongoos = require('mongoose');

// creating connection with database
mongoos.connect('mongodb://127.0.0.1:27017/product', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to the Database');
}) 
.catch ((err) => { 
    console.error(`Error in Conneting to the Database : ${err}`);
    process.exit(1); // Exit the Process if the database connection fails
});