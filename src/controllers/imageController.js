const fs = require("fs");
const imageModel = require("../models").Image;
const dir = (global.__basedir = process.cwd() + "/files");

const controller = {
  getImage: async (req, res) => {
    console.log(req.files.image.name);
    const files = req.files.image;
    if (!files || files.mimetype != "image/jpeg") {
      return res
        .status(500)
        .send({ message: "Error, you should send a correct file" });
    }
    const folder = createFolder();
    if (folder.message != "") {
      return res.status(500).send(folder.message);
    }
    const fullpath = saveImage(files);
    await imageModel
      .create({
        path: fullpath,
      })
      .then((image) => res.status(200).send({ image }))
      .catch((err) => res.status(500).send({ message: "Error with bdd " }));
  },
};

const createFolder = () => {
  fs.mkdir(dir, (err) => {
    if (err) {
      return { message: "Error with folder" };
    }
  });
  return { message: "" };
};

const saveImage = (files) => {
  const date = new Date();
  const fullpath = dir + "/" + date.getTime() + "_" + files.name;
  files.mv(fullpath);
  return fullpath;
};

module.exports = controller;
