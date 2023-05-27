const multer = require("multer");

// Definir el destino de las imágenes

const storage = multer.diskStorage({
  destination:
    "C:/Users/inten/Desktop/Releevant Desarrollo Web/TONI/ecommerceReactConMaterialDesign/public/images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Configurar Multer con la ubicación de destino de las imágenes
const upload = multer({ storage });
module.exports = {
  upload: upload,
};
