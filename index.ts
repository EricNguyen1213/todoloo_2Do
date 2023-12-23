import express, { Express, Request, Response, NextFunction } from "express";
const url = require('url')
const port = 5001;


var todos = [
    {   itemId: 1, 
        authorId: 1213, 
        name: "Eric Nguyen", 
        title: "Milestone 2", 
        desc: "create that ToDo item", 
        deadline: "2nite",
        priority: 2    }
];


const app: Express = express();
var reqPath = "";

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    reqPath = req.path;
    console.log(reqPath)
    next();
});


app.get("/todos", (req: Request, res: Response) => {
    console.log(reqPath)
    res.json(todos);
});



app.post("/todos", (req: Request, res: Response) => {
    const newPost = req.body;
    todos.push(newPost);
    res.send("Added 2Do Item");
});

app.listen(port, () => {
    console.log(`App Listening on ${port}`);
});
