const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3500;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Verbindung
const dev_db_url =
  "mongodb+srv://christoph.jurkun:BWCkoSUW3jfpsMQ0@knowledgebase.jq33jmj.mongodb.net/?retryWrites=true";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err)); // Diese Zeile ruft die main-Funktion auf und fängt Fehler ab, die während der Ausführung auftreten können.
async function main() { // Dies definiert eine asynchrone Funktion namens main, die verwendet wird, um den Hauptteil deiner Anwendung auszuführen
  await mongoose.connect(mongoDB); // In dieser Zeile wird eine Verbindung zur MongoDB-Datenbank hergestellt. mongoose.connect() ist eine Funktion von Mongoose, die eine Verbindung zur MongoDB-Datenbank herstellt.
}
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
  