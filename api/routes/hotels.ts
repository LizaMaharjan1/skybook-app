import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotelByID, getHotelRooms, updateHotel } from '../controllers/hotel'

const router = express.Router();

//CREATE
router.post("/", createHotel)

//UPDATE
router.put("/:id", updateHotel)

//DELETE
router.delete("/:id", deleteHotel)

//GET
router.get("/find/:id", getHotelByID)

//GETALL
router.get("/", getAllHotel)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)



export default router