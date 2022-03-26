import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try{
        const user = new User({
            name: 'Haris',
            email: 'harisajmal29@gmail.com',
            password: 'ABC123',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (error){
        res.send({ message: error.message });
    }
})
export default router;