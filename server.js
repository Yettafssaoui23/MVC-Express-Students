// Importing our express Package
const express = require('express');

const path = require('path');

const studentsRouter = require('./routes/students.router');
const messagesRouter = require('./routes/messages.router');

// Setting up our application using the express function that's exported from the express package.
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Setting a port that we want our server to be made available on
const PORT = 4000;

app.use((req, res, next) => {
    // Creating a constant called start, Which gives us the current time
    const start = Date.now();
    next();
    // Mesuring the difference between the current time, the time that the response is being sent back and the original start time.
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Express allows us to use the app object to respond to these
app.get('/', (req, res) => {
    res.render('index', {
      title: 'The Students Are VERYY Clever',
      caption: 'Let\'s go skiing!',
    });
  });

  app.use('/students', studentsRouter);
  app.use('/messages', messagesRouter);

// Calling the listen function on the server that's returned from this express function
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});