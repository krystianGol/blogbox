import express from "express"
import axios from "axios"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        const data = response.data;
        res.render("index.ejs", { posts: data });
    } catch (error) {
        res.render("index.ejs")
    }
});

app.post("/new/post", async (req, res) => {
    try {
        const response = await axios.post(`${API_URL}/api/post`, req.body);
        res.redirect("/");
    } catch (error) {
        res.render("index.ejs")
    }
});

app.get("/edit", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        const data = response.data;
        res.render("modify.ejs",
            {
                option: "Edit post",
                id: data[req.query.postId - 1].id,
                title: data[req.query.postId - 1].title,
                content: data[req.query.postId - 1].content,
                author: data[req.query.postId - 1].author,
            });
    } catch (error) {
        res.render("index.ejs")
    }
});

app.post("/edit/post", async (req, res) => {
    try {
        const response = await axios.put(`${API_URL}/api/update/post`, req.body);
        res.redirect("/");
    } catch (error) {
        res.render("index.ejs")
    }
});

app.post("/delete", async (req, res) => {
    const postId = req.query.postId;
    try {
        const response = await axios.delete(`${API_URL}/api/delete/postId/${postId}`);
        res.redirect("/");
    } catch (error) {
        res.render("index.ejs")
    }
});

app.get("/new", (req, res) => {
    res.render("modify.ejs",
        {
            option: "New post"
        });
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});