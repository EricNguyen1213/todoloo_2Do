"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoitems_1 = require("./todoitems");
const port = 5001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/todos", (req, res) => {
    res.json(todoitems_1.todoList);
});
app.post("/todos", (req, res) => {
    const newTodo = req.body;
    if ((0, todoitems_1.isValidTodo)(newTodo)) {
        todoitems_1.todoList.push(newTodo);
        res.send("Added 2Do Item");
    }
    else {
        res.status(400).send("Failed to Add 2Do Item");
    }
});
app.listen(port, () => {
    console.log(`App Listening on ${port}`);
});
