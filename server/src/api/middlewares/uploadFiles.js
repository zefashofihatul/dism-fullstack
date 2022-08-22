const multer = require('multer');

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Please upload only images.', false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/resources/static/assets/uploads/');
  },
  filename: function (req, file, cb) {
    let imageName = file.originalname;
    let productName = req.body.name;
    let extFile = file.mimetype.split('/')[1];
    cb(null, Date.now() + '-' + imageName);
  },
});

const uploadFiles = multer({
  storage: storage,
}).any();

module.exports = uploadFiles;
