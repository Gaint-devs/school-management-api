// setup
import express from 'express';
import cors from 'cors';
import postRouter from './routes/post.js';
import authRouter from './routes/auth.js';
const port = process.env.port || 5000

const app = express();
// middleware 
app.use(cors());
app.use(express.json());
app.use(postRouter, authRouter);


//api route

app.get('/', (req,res)=>{
    res.send('Hello world')
})


app.listen(port,()=>{
    console.log('app is running', port);
})