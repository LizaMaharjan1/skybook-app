import jwt from 'jsonwebtoken'
import { createError } from './error'

export const verifyToken = (req: any, res: any, next: any) => {
    const token = req.cookies.token;
    if (!token) {
        return next(createError("You are not the admin user"))
    }
    jwt.verify(token, process.env.JWT!, (error: any, user: any) => {
        if (error) return next(createError("Token is not valid!"))
        req.user = user
        next()
    })
}

export const verifyUser = (req: any, res: any, next: any) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            return next(createError("You are not authorized!@"))
        }
    })
}

export const verifyAdmin = (req: any, res: any, next: any) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return next(createError("Not Admin"))
        }
    })
}