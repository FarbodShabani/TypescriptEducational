import { Router } from "express";

import { Todos } from "../models/todos";

const todos: Todos[] = [];

const toDoRouter = Router();

toDoRouter.get("/", (req, res, next) => {
    return res.status(200).json({todos});
});

toDoRouter.post("/todos", (req, res, next) => {
    const newTodos: Todos = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodos);
});


export default toDoRouter;