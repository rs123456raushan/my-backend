const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/my-backend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("app is running on mongodb")
}).catch((e) => {
    console.log("try again", e)
})