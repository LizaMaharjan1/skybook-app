import User from '../models/User'

//UPDATING USER
export const updateUser = async (req:any, res:any , next:any) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}

//DELETING USER
export const deleteUser = async (req:any, res:any , next:any) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (error) {
        next(error)
    }
}

//GETING USER BY ID
export const getUserByID = async (req:any, res:any , next:any) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

//GETTING ALL USER
export const getAllUser = async (req:any, res:any , next:any) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        next(error);
    }
}