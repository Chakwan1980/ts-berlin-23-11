var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Set up mongoose connection
const mongoose = require("mongoose"); //  Dies importiert das mongoose-Modul, das eine objektorientierte Modellierung für MongoDB in Node.js ermöglicht.
mongoose.set("strictQuery", false); // Diese Zeile setzt die Mongoose-Einstellung "strictQuery" auf false. Diese Einstellung beeinflusst das Verhalten von Mongoose beim Verarbeiten von Abfragen.

const dev_db_url =
  "mongodb+srv://christoph.jurkun:BWCkoSUW3jfpsMQ0@kartenworld.oagdx46.mongodb.net/?retryWrites=true";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err)); // Diese Zeile ruft die main-Funktion auf und fängt Fehler ab, die während der Ausführung auftreten können.
async function main() { // Dies definiert eine asynchrone Funktion namens main, die verwendet wird, um den Hauptteil deiner Anwendung auszuführen
  await mongoose.connect(mongoDB); // In dieser Zeile wird eine Verbindung zur MongoDB-Datenbank hergestellt. mongoose.connect() ist eine Funktion von Mongoose, die eine Verbindung zur MongoDB-Datenbank herstellt.
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
