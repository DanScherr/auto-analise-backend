// Create Instances
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env vars
dotenv.config(  { path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

// DB connect
connectDB();

//Load Routes
const criacao = require('./routes/criacao');

//Load Middleware
// const logger    = require('./middleware/logger');

// Initialize app variable with express
const app = express();

// Body parser
app.use(express.json());

// Mount Middlewares
// app.use(        logger);
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
};

// Mount the Routes
app.use('/api/v1/criacao', criacao);

// Run Server
const server = app.listen( PORT, () =>{
    console.debug(`Server running in ${ENV} mode on port ${PORT}`)
});

// Handle unhandled rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});