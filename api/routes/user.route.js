import express from "express";
import { createPost,  deletepost,  getPosts,  updateUser, updatepost } from "../Controlles/user.controller.js";
import {verifyToken} from "../utils/verifyUser.js"

const router = express.Router();



router.put('/update/:userId',verifyToken,updateUser);
router.post('/post/create',verifyToken,createPost);
router.get('/post/getposts',getPosts);
router.delete('/post/delete/:postId/:userId',verifyToken,deletepost);
router.put('/post/update/:postId/:userId', verifyToken, updatepost);

export default router;