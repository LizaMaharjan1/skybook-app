import express from 'express'
import { createRoom, deleteRoom, getAllRoom, getRoomByID, updateRoom, updateRoomAvailability } from '../controllers/room'

const router = express.Router();

//CREATE
router.post("/:hotelId", createRoom)

//UPDATE
router.put("/:id", updateRoom)
router.put("/available/:id", updateRoomAvailability)

//DELETE
router.delete("/:id/:hotelId", deleteRoom)

//GET
router.get("/:id", getRoomByID)

//GETALL
router.get("/", getAllRoom)

export default router