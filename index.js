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

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
    console.log(`server is running at port ${app.get("port")}`);
});
