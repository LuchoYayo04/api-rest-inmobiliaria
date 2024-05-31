import Apartment from "../models/apartment.model.js";
// import upload from "../middlewares/multerConfig.js";


//Obtener propiedades
export const getAllApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.status(200).json(apartments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//obtener propiedades por id
export const getApartmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const apartment = await Apartment.findById(id);

    if (!apartment) {
      return res.status(404).json({ message: 'Apartamento no encontrado' });
    }

    res.status(200).json(apartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Crear propiedades
export const createApartment = async (req, res) => {
  const { nameApartment, description, price, location, bedrooms, bathrooms } = req.body;
  try {
    const filename = req.file.destination + req.file.filename;
    
    const newApartment = await Apartment.create({
      nameApartment,
      description,
      price,
      location,
      bedrooms,
      bathrooms,
      filename 
    });
    await newApartment.save();

    res.status(201).json(newApartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
