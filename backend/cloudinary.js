const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');
const DatauriParser = require('datauri/parser');

const parser = new DatauriParser();

const formatBufferTo64 = (file) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);

const singlePublicFileUpload = async (file) => {
  const data = formatBufferTo64(file);
  return await cloudinary.uploader.upload(data.content);
};

const singleVideoAudioUpload = async (file) => {
  const data = formatBufferTo64(file);
  return await cloudinary.uploader.upload(data.content, { resource_type: 'video' });
};

const storage = multer.memoryStorage({
  destination: function (_req, _file, callback) {
    callback(null, '');
  }
});

const singleMulterUpload = (nameOfKey) =>
  multer({ storage: storage }).single(nameOfKey);

module.exports = {
  singlePublicFileUpload,
  singleMulterUpload,
  singleVideoAudioUpload,
};
