import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotelByID, updateHotel } from '../controllers/hotel'
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/find/:id", getHotelByID)

//GETALL
router.get("/", getAllHotel)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)



export default router