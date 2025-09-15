const mongoose = require('mongoose');

const database = process.env.DATABASE;
mongoose.connect(database)
.then(()=>{
    console.log("DB connection successful");    
})
.catch((err)=>{
    
    console.log(err);
})
module.exports = mongoose;