import express from 'express'
import { createHotel, deleteHotel, getAllHotel, getHotelByID, updateHotel } from '../controllers/hotel'
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/:id", getHotelByID)

//GETALL
router.get("/", getAllHotel)

export default router