import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel , countByCity , countByType ,getHotelRooms} from "../controllers/hotelController.js";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";


//  create Hotel

router.post("/", createHotel);

// update hotel

router.put("/:id",updateHotel);

// delete

router.delete("/:id",deleteHotel);

// get specefic hotels

router.get("/find/:id",getHotel);

// get all hotels 

router.get("/",getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

router.get("/room/:id", getHotelRooms);




export default router;