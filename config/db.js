const mongoose = require('mongoose')

const connectDB = async () => {
  try
  {
    const connect = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify:false,
    })
    console.log(`MongoDB connected: ${connect.connection.host}` )
  } catch (err)
  {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB