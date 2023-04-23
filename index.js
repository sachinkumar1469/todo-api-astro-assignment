const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

// Local imports
const env = require('./config/environment');
const schedule = require('./schedulers/reminderScheduler');

// Connect to the database
mongoose.connect(`mongodb+srv://sachinyadav1469:Sachin%40123@cluster0.my3twen.mongodb.net/${env.db_name}?retryWrites=true&w=majority`, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...'));

// Body parser middleware
app.use(express.json());

// Routes
app.use("/api", require("./routes/index"));


// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong'
    });
});


// Listen on port 8000
app.listen(port, () => console.log(`Listening on port ${port}`));
