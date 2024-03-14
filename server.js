import express from "express"
import axios from "axios"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/edit", (req, res) => {
    res.render("modify.ejs");
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});