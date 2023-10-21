const express = require("express");
const mongoose = require("mongoose")

require("dotenv").config()

const routes = require("./routes/ToDoRoutes")

const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000

//Middleware
app.use(express.json())
app.use(cors())

/* app.get("/", (req, res)=>{
     res.send("Hi...");
 })
 */
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected...."))
.catch((err) => console.log(err));

app.use(routes);


app.listen(PORT, () => console.log('Listening at $(PORT)...'));