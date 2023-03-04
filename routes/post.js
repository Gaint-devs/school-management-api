import { createPost, getAllPost } from "../controller/post.js";
import express  from "express";

const postRouter = express.Router();

postRouter.post('/posts', async(req,res)=>{
    const payload = req.body;
    const newPost = await createPost(payload);
    return res.json(newPost)
});
postRouter.get('/posts', async(req,res)=>{
    const getPost = await getAllPost()
    return res.json(getPost)
});


export default postRouter;