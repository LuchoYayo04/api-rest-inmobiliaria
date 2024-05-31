import multer from 'multer';
import path from 'path';

// Configuración de almacenamiento de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directorio donde se guardarán los archivos subidos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre de archivo único
  }
});

// Middleware de Multer
const upload = multer({ storage: storage });

export default upload;
