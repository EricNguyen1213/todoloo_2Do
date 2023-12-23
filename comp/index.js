"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url = require('url');
const port = 5001;
var todos = [
    { itemId: 1,
        authorId: 1213,
        name: "Eric Nguyen",
        title: "Milestone 2",
        desc: "create that ToDo item",
        deadline: "2nite",
        priority: 2 }
];
const app = (0, express_1.default)();
var reqPath = "";
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    reqPath = req.path;
    console.log(reqPath);
    next();
});
app.get("/todos", (req, res) => {
    console.log(reqPath);
    res.json(todos);
});
app.post("/todos", (req, res) => {
    const newPost = req.body;
    todos.push(newPost);
    res.send("Added 2Do Item");
});
app.listen(port, () => {
    console.log(`App Listening on ${port}`);
});
