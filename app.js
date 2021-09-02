const express = require("express");
const app = express();
require("./conn");
const Register = require("./registers");

const path = require("path");
//const { urlencoded } = require("express");
const port = process.env.PORT || 3000;

//console.log(__dirname)
const static_path = path.join(__dirname, "./templates");
app.use(express.static(static_path));
app.use(express.urlencoded({extended: false}));

app.post("/register", async (req, res) => {
    
    try{
        const pass = req.body.password;
        const cpass = req.body.confirmpassword;
        if(pass === cpass){
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
            })

            const registered = await registerEmployee.save();
            res.status(201).send("<h1>Hello, you are on home page</h1>")
        }else{
            res.send("password is not matching");
        }
    }catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})
