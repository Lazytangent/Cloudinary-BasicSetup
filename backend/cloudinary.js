const cloudinary = require('cloudinary').v2;
const multer = require('multer');

const singlePublicFileUpload = async (file) => {
    return await cloudinary.uploader.upload(file);
};

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '');
  }
});

const singleMulterUpload = (nameOfKey) =>
  multer({ storage: storage }).single(nameOfKey);

module.exports = {
  singlePublicFileUpload,
  singleMulterUpload,
};
