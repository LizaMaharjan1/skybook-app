import express from 'express'
import { verify } from 'jsonwebtoken';
import { updateUser, deleteUser, getUserByID, getAllUser } from '../controllers/user'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken'

const router = express.Router();

// router.get('/checkAuth' , verifyToken , (req,res,next)=>{
//     res.send("Authentic User")
// })

// //For verifying the user so that they can del their acc
// router.get('/checkUser/:id' , verifyUser , (req,res,next)=>{
//     res.send("Authentic User")
// })
// //For verifying the user so that they can del their acc
// router.get('/checkAdmin/:id' , verifyAdmin , (req,res,next)=>{
//     res.send("Admin User")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUserByID)

//GETALL
router.get("/", verifyAdmin, getAllUser)

export default router