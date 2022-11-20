import { Router } from "express";

import { Todos } from "../models/todos";

type requestBody = {text: string};
type requestParams = {id : string}

let todos: Todos[] = [];

const toDoRouter = Router();

toDoRouter.get("/", (req, res, next) => {
    return res.status(200).json({todos});
});

toDoRouter.post("/todos", (req, res, next) => {
    const {text} = req.body as requestBody;
    
    const newTodo: Todos = {
        id: new Date().toISOString(),
        text: text,
    };
    todos.push(newTodo);
    res.status(201).json({newTodo, todos});
});

toDoRouter.put("/todos/:id", (req, res, next) => {

    const {id} = req.params as requestParams;
    const {text} = req.body as requestBody;
    const editedTodDoIndex = todos.findIndex((todo) => todo.id === id) as number;
    if (editedTodDoIndex >= 0) {
        todos[editedTodDoIndex] = {
            text: text,
            id: id,
        }
        return  res.status(200).json({editedTodo: todos[editedTodDoIndex],todos});
    }
    res.status(404).json({message: "the todo is not excited in the todos anymore"})
});

toDoRouter.delete("/todos/:id", (req, res, next) => {

    const {id} = req.params as requestParams;
    todos = todos.filter((todo) => todo.id !== id);
        return  res.status(202).json({todos});
    
})


export default toDoRouter;