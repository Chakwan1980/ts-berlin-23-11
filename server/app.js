const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3500;
app.set('port', port);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Verbindung
mongoose.connect('mongodb://localhost:27017/knowledge-base', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('MongoDB connected');
});

// Importiere Routen
const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
