const express = require('express')
      cors = require('cors')
      logger = require('morgan')
      mongoose = require('mongoose')
      tutorialRoutes = require('./src/routes/tutorial')

const app = express();

// DB Connection
mongoose.connect('mongodb://localhost:27017/react_tutorial_db', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log('==> Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.Router());
app.use(logger('dev'))


// Using routes
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api', tutorialRoutes);

app.listen(process.env.PORT || 5000, () => {
   console.log(`==> app running on port ${process.env.PORT || 5000}!`)
})
