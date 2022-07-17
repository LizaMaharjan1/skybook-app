import express from 'express'
import { createRoom, deleteRoom, getAllRoom, getRoomByID, updateRoom } from '../controllers/room'
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom)

//UPDATE
router.put("/:id", verifyAdmin, updateRoom)

//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)

//GET
router.get("/:id", getRoomByID)

//GETALL
router.get("/", getAllRoom)

export default router