const cloudinary = require('cloudinary').v2;
const multer = require('multer');

const singlePublicFileUpload = async (file) => {
  try {
    const image = await cloudinary.uploader.upload(file);
    console.log(image.url);
    res.json(image);
  } catch (err) {
    console.error(err);
    res.json({ message: "Upload failed." });
  }
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
