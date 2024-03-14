import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

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

app.get()

app.listeing(port, () => {
    console.log(`Listening on port ${port}`);
});