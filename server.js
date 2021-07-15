if (process.env.NODE_ENV !== 'production')
{
  require('dotenv').config();
} 

const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const connectDB = require('./config/db')
const app = express()

// Set up view engine and ejs
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// load config folder
dotenv.config({path:'./config/config.env'})

connectDB()

// set dev parameters

// 
app.use('/', indexRouter)

// Set up server

const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
  if (err)
  {
    console.log('Something is wrong')
  } else
  {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  }
})