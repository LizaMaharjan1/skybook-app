import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
    }
    , {
        timestamps: true,
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
    }
)

export default mongoose.model("User", UserSchema)