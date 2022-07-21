import Hotel from '../models/Hotel'

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

//GETTING ALL HOTEL
export const getAllHotel = async (req:any, res:any , next:any) => {
    try {
        const hotels = await Hotel.find()
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
        const appartmentCount = await Hotel.countDocuments({type:"appartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        res.status(200).json([
            {type:"hotel" , count:hotelCount},
            {type:"appartment" , count:appartmentCount},
            {type:"resort" , count:resortCount},
            {type:"villa" , count:villaCount},
        ])
    } catch (error) {
        next(error);
    }
}