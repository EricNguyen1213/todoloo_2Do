import express, { Express, Request, Response } from "express";
import { Todo, todoList, isValidTodo } from './todoitems';

const port = 5001;
const app: Express = express();

app.use(express.json());



app.get("/todos", (req: Request, res: Response) => {
    res.json(todoList);
});

app.post("/todos", (req: Request, res: Response) => {

    const newTodo: Todo = req.body;
    if (isValidTodo( newTodo )) {
        todoList.push( newTodo );
        res.send("Added 2Do Item");
    } else {
        res.status(400).send("Failed to Add 2Do Item")
    }

});

app.listen(port, () => {
    console.log(`App Listening on ${port}`);
});
