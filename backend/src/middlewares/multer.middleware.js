import multer from "multer";
import path from "path";

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// File filter to allow only image and PDF files
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const mimeType = allowedTypes.test(file.mimetype);
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  if (mimeType && extname) {
    return cb(null, true);
  }
  cb("Error: File type not supported!");
};

export const upload = multer({
  storage,
  fileFilter,
});
