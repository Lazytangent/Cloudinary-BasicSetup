const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { singleMulterUpload, singlePublicFileUpload } = require('../../cloudinary');
const { User, Image } = require('../../db/models');

router.post('', singleMulterUpload('image'), asyncHandler(async (req, res) => {
  try {
    const image = await singlePublicFileUpload(req.file);
    console.log(image.url);
    res.json(image);
  } catch (err) {
    console.error(err);
  }
}));

module.exports = router;
