// setup
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import postRouter from './routes/post.js';
dotenv.config();
const port = process.env.port || 5000

const app = express();
// middleware 
app.use(cors());
app.use(express.json());
app.use(postRouter);


//api route

app.get('/', (req,res)=>{
    res.send('Hello world')
})


app.listen(port,()=>{
    console.log('app is running', port);
})