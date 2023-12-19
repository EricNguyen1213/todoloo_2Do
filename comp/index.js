"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 5001;
const app = (0, express_1.default)();
app.get("/hello", (req, res) => {
    res.status(200).send("Hello User!");
});
app.listen(port, () => {
    console.log(`App Listening on ${port}`);
});
