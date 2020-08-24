import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    return console.log(`now listening on ${port}...`);
});