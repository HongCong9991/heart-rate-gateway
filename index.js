const express = require("express");
const cors = require("cors");
const router = require("./routers/router");

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.get("/", (req, res) => {
    res.send("Heart rate gateway");
});

app.use(router);
const PORT = process.env.PORT || 5000
var HOST = process.env.HOST || '0.0.0.0'
//app.set("port", process.env.PORT || 5000);
app.listen(PORT, HOST, () => {
    console.log(`server is running at port`);
});
