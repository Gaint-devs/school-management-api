// setup
import express from 'express';
import cors from 'cors';
import postRouter from './routes/post.js';
import authRouter from './routes/auth.js';
import  createError from 'http-errors';
import profileRouter from './routes/profile.js';
const port = process.env.port || 5000

const app = express();
// middleware 
app.use(cors());
app.use(express.json());
app.use(postRouter, authRouter, profileRouter);


//api route

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.use((req, res, next) => {
    next(createError.NotFound());
  });
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      status: err.status || 500,
      message: err.message,
    });
  });


app.listen(port,()=>{
    console.log('app is running', port);
})