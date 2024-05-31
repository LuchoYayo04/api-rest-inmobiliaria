import { Router } from "express";
import { getAllApartments, getApartmentById, createApartment,  } from "../controllers/apartment.controller.js";
import multer from "multer";
import fs from 'node:fs';
import upload from "../middlewares/multerConfig.js";

const router = Router();

router.get("/apartments", getAllApartments);
router.get('/apartments/:id', getApartmentById);

router.post('/apartments',upload.single('image'), createApartment);

// const saveImage = (file) =>{
//     const newPath = `./upload/${file.originalname}`;
//     fs.renameSync(file.path, newPath);
//     return newPath;
// }

export default router;
