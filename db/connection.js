const  mongoose  = require("mongoose");


mongoose.connect("mongodb+srv://datawarehouse75:Data123@cluster0.sfqcnbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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