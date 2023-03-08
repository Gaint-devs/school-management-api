import express  from "express";
import { createProfile, getProfile } from "../controller/profile.js";

const profileRouter = express.Router();

profileRouter.post('/profile', async(req,res)=>{
    const payload = req.body;
    console.log(payload);
    const newProfile = await createProfile(payload);
    return res.send({newProfile})
});
profileRouter.get('/profile', async(req,res)=>{
    const posts = await getProfile()
    return res.json({posts})
});

export default profileRouter;