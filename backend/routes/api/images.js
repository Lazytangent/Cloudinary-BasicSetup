const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { singleMulterUpload, singlePublicFileUpload } = require('../../cloudinary');
const { User, Image } = require('../../db/models');

router.post('', singleMulterUpload('image'), asyncHandler(async (req, res) => {
  try {
    const image = await singlePublicFileUpload(req.file);
    res.json(image);
  } catch (err) {
    res.json(err);
  }
}));

module.exports = router;
