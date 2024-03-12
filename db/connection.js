const  mongoose  = require("mongoose");


mongoose.connect("mongodb+srv://hamza:hamza@cluster0.urrca0r.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

}).then(() => {
    console.log("connection is successfull with DataBase");
}).catch((err) => {
    console.log(err.message);
})

// mongoose.connect("mongodb+srv://hamza:hamza@yougutmap.tjhzbzi.mongodb.net/?retryWrites=true&w=majority", {

//     useNewUrlParser: true, 
    
//     useUnifiedTopology: true 
    
//     }, err => {
//     if(err) throw err;
//     console.log('Connected to MongoDB!!!')
//     });