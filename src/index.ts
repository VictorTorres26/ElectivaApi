import express from "express";
import indexRouter from "./start/indexRoute";
import { dbConnectMysql } from './database/database';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

//sycronize();

//Routes
app.use(express.json())
app.use(indexRouter)
app.use(cors({
    origin: '*',
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

dbConnectMysql()
