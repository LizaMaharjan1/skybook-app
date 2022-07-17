import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
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

export default mongoose.model("Room", RoomSchema)