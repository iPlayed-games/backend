const express = require('express');
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6001;

app.get('/', (req, res) => {
  res.send('iPlayed!')
})


// MONGOOSE SETUP

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));