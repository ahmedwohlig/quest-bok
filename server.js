const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

mongoose.connect(
    "mongodb://localhost:27017/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    console.log("database connected successfully")
);

app.use(express.json());

const categoryRoutes = require("./routes/category/index");

app.use("/api", categoryRoutes);

app.listen(
    PORT || 3800,
    console.log(`server successfully started on port ${PORT || 3800}`)
);
