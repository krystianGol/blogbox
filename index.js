import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

const today = new Date();
const year = today.getFullYear();
const monthIndex = today.getMonth() + 1;
const day = today.getDate();

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const month = monthNames[monthIndex - 1];

let postDate = `${month}, ${day} ${year}`;


let posts = [
    {
        id: 1,
        title: "Exploring the Depths: The Enigmatic World of Deep Sea Creatures",
        content: "In the vast expanse of the ocean's abyssal zones lies a world that remains largely unexplored by humans. From the eerie anglerfish to the graceful gulper eel, the creatures that inhabit these depths are as fascinating as they are mysterious. Join us on a journey into the deep sea to uncover the secrets of these remarkable beings, their unique adaptations, and the challenges they face in their extreme environment.",
        author: "Marina Ramirez",
        date: "March 10, 2024"
    },
    {
        id: 2,
        title: "The Art of Mindfulness: Cultivating Inner Peace in a Chaotic World",
        content: "In today's fast-paced world, finding moments of calm amidst the chaos can seem like an impossible task. However, the practice of mindfulness offers a pathway to inner peace and emotional resilience. In this blog post, we'll explore the principles of mindfulness, practical techniques for incorporating it into your daily life, and the profound benefits it can bring for mental well-being and overall happiness.",
        author: "Jonathan Chen",
        date: "March 11, 2024"
    },
    {
        id: 3,
        title: "Unraveling the Mysteries of Quantum Computing: A Beginner's Guide",
        content: "Quantum computing represents a paradigm shift in the world of technology, promising unprecedented computational power and the ability to solve complex problems that are beyond the reach of classical computers. But what exactly is quantum computing, and how does it work? In this beginner's guide, we'll demystify the basics of quantum mechanics, explain key concepts such as superposition and entanglement, and explore the potential applications of this revolutionary technology.",
        author: "Sarah Patel",
        date: "March 13, 2024"
    }
]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.post("/api/post", (req, res) => {

    const newPostId = posts.length + 1;
    const newPostTitle = req.body.title;
    const newPostContent = req.body.content;
    const newPostAuthor = req.body.author;

    const newPost = {
        id: newPostId,
        title: newPostTitle,
        content: newPostContent,
        author: newPostAuthor,
        date: postDate
    };

    posts.push(newPost);
    res.json(newPost);
});

app.put("/api/update/post", (req, res) => {
    const postId = parseInt(req.body.id);
    const postTitle = req.body.title;
    const postContent = req.body.content;
    const postAuthor = req.body.author;
    const newPostDate = postDate;

    const searchIndex = posts.findIndex(post => post.id === postId);

    const updatedPost = {
        id: postId,
        title: postTitle,
        content: postContent,
        author: postAuthor,
        date: newPostDate
    }

    console.log("New ", updatedPost);
    console.log("Old ", posts[searchIndex]);

    posts[searchIndex] = updatedPost;
    res.json(updatedPost);
});

app.delete("/api/delete/postId/:id", (req, res) => {
    const indexPostToDelete = parseInt(req.params.id);
    const searchIndex = posts.findIndex(post => post.id === indexPostToDelete);
    const postToDelete = posts[searchIndex];

    if (searchIndex !== -1) {
        posts.splice(searchIndex, 1);
        res.status(200)
        res.json(postToDelete);
    } else {
        res
            .status(404)
            .json({ error: `Joke with id: ${postToDelete} not found. No jokes were deleted.` });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});