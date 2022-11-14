import express from "express";

import toDoRouter from "./router/todo";


const app = express();

app.use("/", toDoRouter);


app.listen(2828);