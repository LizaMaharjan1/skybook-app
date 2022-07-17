import Hotel from '../models/Hotel'
import Room from '../models/Room'
import {createError} from '../utils/error'

export const createRoom = async (req:any,res:any ,next:any)=>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push : {rooms:savedRoom.id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

//UPDATING ROOMS
export const updateRoom = async (req:any, res:any , next:any) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedRoom)
    } catch (error) {
        next(error)
    }
}

//DELETING ROOM
export const deleteRoom = async (req:any, res:any , next:any) => {
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull : {rooms:req.params.id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room has been deleted")
    } catch (error) {
        next(error)
    }
}

//GETING ROOM BY ID
export const getRoomByID = async (req:any, res:any , next:any) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}

//GETTING ALL ROOM
export const getAllRoom = async (req:any, res:any , next:any) => {
    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch (error) {
        next(error);
    }
}