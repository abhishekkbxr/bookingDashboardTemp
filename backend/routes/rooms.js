import express from "express";
const router = express.Router();
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


//CREATE
router.post("/:hotelid", createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", updateRoom);
//DELETE
router.delete("/:id/:hotelid", deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;