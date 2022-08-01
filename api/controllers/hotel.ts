import Hotel from '../models/Hotel'
import Room from '../models/Room'

//CREATING HOTEL
export const createHotel = async (req:any, res:any , next:any) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}

//UPDATING HOTEL
export const updateHotel = async (req:any, res:any , next:any) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error)
    }
}

//DELETING HOTEL
export const deleteHotel = async (req:any, res:any , next:any) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        next(error)
    }
}

//GETING HOTEL BY ID
export const getHotelByID = async (req:any, res:any , next:any) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

//GETTING ALL HOTEL and filter query
export const getAllHotel = async (req:any, res:any , next:any) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        next(error);
    }
}

export const getAllHotelFilter = async (req:any, res:any , next:any) => {
    const { minPrice, maxPrice, ...others } = req.query;
    try {
        const hotels = await Hotel.find(
            {
                ...others, 
                cheapestPrice:{$gt:minPrice-1 , $lt: maxPrice-1}
            }
        ).limit(req.query.limit);
        res.status(200).json(hotels)
    } catch (error) {
        next(error);
    }
}
export const countByCity = async (req:any, res:any , next:any) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map((city:any)=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error);
    }
}
export const countByType = async (req:any, res:any , next:any) => {

    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        res.status(200).json([
            {type:"hotel" , count:hotelCount},
            {type:"apartment" , count:apartmentCount},
            {type:"resort" , count:resortCount},
            {type:"villa" , count:villaCount},
        ])
    } catch (error) {
        next(error);
    }
}

export const getHotelRooms = async (req:any, res:any , next:any) => {
    try {
        const hotel:any =await Hotel.findById(req.params.id)
        const roomList = await Promise.all(hotel['rooms'].map((room:any)=>{
            return Room.findById(room)
        }))
        res.status(200).json(roomList)
    } catch (error) {
        next(error);
    }
}