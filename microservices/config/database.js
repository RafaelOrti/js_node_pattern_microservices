const mongoose = require('mongoose');
const config = require('./config'); // Import your configuration module

const connectDatabase = async () => {
  try {
    const dbUrl = config.database.url;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };

    await mongoose.connect(dbUrl, options);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = { connectDatabase };
