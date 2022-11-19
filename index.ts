import express from "express";
import bodyParser from "body-parser";

import toDoRouter from "./router/todo";


const app = express();

app.use(bodyParser.json());

app.use("/", toDoRouter);



app.listen(2828);