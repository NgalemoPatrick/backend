require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./ROUTES/workouts')

const PORT = process.env.PORT || 4000

const url = process.env.DATABASE_URI
// create an instance of express app
const app = express()

app.use(express.json())


// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// set up routes
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to workout app' })
// })
app.use('/api/workouts', router)
// listen for request

// connect the data base
mongoose.connect(url,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Data Base connected and Server listening on port ${PORT}`))
  }).catch((error) => {
    console.log(error)
  })
