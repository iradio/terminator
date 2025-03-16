require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Load configuration
const config = yaml.load(fs.readFileSync(path.join(__dirname, '../config/default.yaml'), 'utf8'));

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes will be imported here
// app.use('/api', require('./api/routes'));

const PORT = process.env.PORT || config.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});