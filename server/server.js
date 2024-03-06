//const express = require('express');
import express from "express";
const app= express()

app.use(express.json())
 app.use(express.urlencoded({extended: true}))

app.get("/api", (req, res) =>{

    res.json({"users": ["userone","usertwo","userthree"]})
})

  
app.listen(5000, ()=> {console.log("server running")});