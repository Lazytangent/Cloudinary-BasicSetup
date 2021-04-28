const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { singleMulterUpload, singlePublicFileUpload } = require('../../cloudinary');
const { Image } = require('../../db/models');

router.post('', singleMulterUpload('image'), asyncHandler(async (req, res) => {
  try {
    const image = await singlePublicFileUpload(req.file);
    const newImage = await Image.create({
      userId: req.body.userId,
      imageUrl: image.url,
    });
    res.json(newImage);
  } catch (err) {
    res.status(500).json(err);
  }
}));

module.exports = router;
