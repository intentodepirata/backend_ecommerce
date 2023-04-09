const multer = require('multer');

// Definir el destino de las imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'C:/Users/inten/Desktop/Releevant Desarrollo Web/Ecommerce_inicio - SQL/assets/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
  })

// Configurar Multer con la ubicación de destino de las imágenes
const upload = multer({ storage: storage })
module.exports = {
    upload: upload
  };

