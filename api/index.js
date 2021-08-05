const express = require('express')
const app = express()
app.use(express.json())
const users = [
    {
        id: 1,
        username : 'John',
        password : 'John123',
        isAdmin : true
    },
    {
        id : 2,
        username : "Jane",
        password : "Jane123",
        isAdmin : false
    }
]

app.post("/api/login",(req, res) => {
    const { username , password } = req.body;
    res.json("Hey it works");
})

app.listen(5000, ()=> console.log("Backend server is runing!"));
