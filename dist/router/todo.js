"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const toDoRouter = (0, express_1.Router)();
toDoRouter.get("/", (req, res, next) => {
    return res.status(200).json({ todos });
});
toDoRouter.post("/todos", (req, res, next) => {
    const { text } = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: text,
    };
    todos.push(newTodo);
    res.status(201).json({ newTodo, todos });
});
toDoRouter.put("/todos/:id", (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    const editedTodDoIndex = todos.findIndex((todo) => todo.id === id);
    if (editedTodDoIndex >= 0) {
        todos[editedTodDoIndex] = {
            text: text,
            id: id,
        };
        return res.status(200).json({ editedTodo: todos[editedTodDoIndex], todos });
    }
    res.status(404).json({ message: "the todo is not excited in the todos anymore" });
});
toDoRouter.delete("/todos/:id", (req, res, next) => {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id !== id);
    return res.status(202).json({ todos });
});
exports.default = toDoRouter;
