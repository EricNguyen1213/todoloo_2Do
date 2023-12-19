import express, { Express, Request, Response } from "express";
const port = 5001;

const app: Express = express();

app.get("/hello", (req: Request, res: Response) => {
    res.status(200).send("Hello World");
});

app.listen(port, () => {
    console.log(`App Listening on ${port}`);
});