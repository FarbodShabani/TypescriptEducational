"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const toDoRouter = (0, express_1.Router)();
toDoRouter.get("/", (req, res, next) => {
    return res.status(200).json({ todos });
});
toDoRouter.post("/todos", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ newTodo, todos });
});
toDoRouter.put("/todos", (req, res, next) => {
    const editedTodoId = req.body.id;
    const editedTodoText = req.body.text;
    const editedTodDoIndex = todos.findIndex((todo) => todo.id === editedTodoId);
    if (editedTodDoIndex >= 0) {
        todos[editedTodDoIndex] = {
            text: editedTodoText,
            id: editedTodoId,
        };
        return res.status(200).json({ editedTodo: todos[editedTodDoIndex], todos });
    }
    res.status(404).json({ message: "the todo is not excited in the todos anymore" });
});
toDoRouter.delete("/todos/:id", (req, res, next) => {
    const todoId = req.params.id;
    todos.filter((todo) => todo.id === todoId);
    return res.status(202).json({ todos });
});
exports.default = toDoRouter;
