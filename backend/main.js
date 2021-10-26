// main module for stamp auction database system backend
const port = 3000, express = require("express"), app = express();

app.get("/", (req, res) => {
    res.send("Hello, this system is in very early setu up stage :3");
});

app.listen(port, () => {
    console.log("server running on port " + port);
});