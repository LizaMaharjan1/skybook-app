import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import { createError } from '../utils/error'

//register
export const register = async (req: any, res: any, next: any) => {
    try {
        const responseobj:any = {};
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hash,
        })

        const saveUser = await newUser.save();
        responseobj["message"]="User registered successfully!";
        responseobj["userData"]= saveUser
        
        res.status(200).json(responseobj)
    } catch (error) {
        next(error)
    }
}

//login
export const login = async (req: any, res: any, next: any) => {
    try {
        const user:any = await User.findOne({ userName: req.body.userName })
        if (!user) return next(createError("User not found."))

        const isPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isPassword) return next(createError("Wrong Username or password"))

        const token = jwt.sign({ id: user._id}, process.env.JWT!);

        const { password,createdAt, updatedAt, __v, ...otherDetails } = user["_doc"];
        res.cookie("token", token, { httpOnly: true }).status(200).json({ ...otherDetails })
    } catch (error) {
        next(error)
    }
}