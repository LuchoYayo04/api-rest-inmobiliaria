import Apartment from "../models/apartment.model.js";

//Obtener propiedades
export const getAllApartments = async (req, res) => {
  try {
      const apartments = await Apartment.find();
      res.status(200).json(apartments);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

//Crear propiedades
export const createApartment = async (req, res) => {
  const apartmentData = req.body;

  try {
      const newApartment = await Apartment.create(apartmentData);
      res.status(201).json(newApartment);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};