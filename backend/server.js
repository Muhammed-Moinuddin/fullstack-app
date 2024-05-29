import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

//module.js = assembling of file asynchronously
//common.js = assembling of file synchronously

// app.get("/",(req,res) => {
//     res.send("Server is ready");
// });

app.get("/api/jokes", (req,res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "This is Joke 1"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "This is Joke 2"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "This is Joke 3"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "This is Joke 4"
        },
        {
            id: 5,
            title: "Joke 5",
            content: "This is Joke 5"
        }
    ];
    res.send(jokes);
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
})