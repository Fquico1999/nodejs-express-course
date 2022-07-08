const mongoose = require('mongoose')

const connectDB = (url)=>{
   // Connect returns a promise
   return mongoose
   .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true, 
      useFindAndModify: false,
   })
}

module.exports = connectDB