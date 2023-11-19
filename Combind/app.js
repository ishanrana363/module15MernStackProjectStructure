const express = require("express")
const app = new express()

const cookieParser = require("cookie-parser")
const cors = require("cors")
const expressMongoSanitize = require("express-mongo-sanitize")
const expressRateLimit = require("express-rate-limit")
const helmet = require("helmet")
const hpp = require("hpp")
const xssClean = require("xss-clean")
const mongoose = require("mongoose")
const path = require("path");



// Middleware Implement




// Backend Route




// FrontEnd Route

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"clien-side","dist","index.html"))
})



module.exports = app

















































