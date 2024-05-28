import { Router } from "express";
import { getAllApartments, createApartment } from "../controllers/apartment.controller.js";

const router = Router();

router.get("/apartments", getAllApartments);

router.post("/apartments", createApartment)

export default router;
