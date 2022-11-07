const express = require('express');
const app = express();


const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello from LCO</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        userName: "_pratik.c",
        followers: 301,
        following: 324,
        posts: 20,
        date: new Date()
    };
    res.status(200).json(instaSocial)
    
});

app.get("/api/v1/facebook", (req, res) => {
    const facebookSocial = {
        userName: "Pratik Chakraborty",
        followers: 2001,
        following: 2001,
        posts: 200,
        date: new Date()
    };
    res.status(200).json(facebookSocial)
    
});

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinSocial = {
        userName: "Pratik Chakraborty",
        followers: 2500,
        following: 201,
        posts: 13,
        date: new Date()
    };
    res.status(200).json(linkedinSocial)
    
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

