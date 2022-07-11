const express = require("express");
const assetRouter = express.Router();
const asset = require("../models/AssetSchema");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const User = require("../models/User");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const filefilter = (req, file, cb) => {
  const allowedFileTypes = [
    
    "application/pdf",
  ];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, filefilter });

assetRouter
  .route("/tableasset")
  .post(upload.single("OwnershipDocument"), (req, res) => {
    const ID = req.body.ID;
    const Barcode = req.body.Barcode;
    const ItemName = req.body.ItemName;
    const Descripation = req.body.Descripation;
    const Type = req.body.Type;
    const Mode = req.body.Mode;
    const Vendor = req.body.Vendor;
    const Receipt = req.body.Receipt;
    const Price = req.body.Price;
    const CostCode = req.body.CostCode;
    const ProjectName = req.body.ProjectName;
    const OwnedBy = req.body.OwnedBy;

    const OwnershipDocument = req.file.filename;
    const DateOfPurchase = req.body.DateOfPurchase;

    const newUserData = {
      ID,
      Barcode,
      ItemName,
      Descripation,
      Type,
      Mode,
      Vendor,
      Receipt,
      Price,
      CostCode,
      ProjectName,
      OwnedBy,
      OwnershipDocument,
      DateOfPurchase,
    };

    const newUser = new asset(newUserData);
    console.log(newUser);
    newUser
      .save()
      .then(() => res.json("user added"))
      .catch((err) => res.status(400).json("Error:" + err));
  });

assetRouter.get("/getasset", async (req, res) => {
  try {
    const assetUser = await asset.find();
    res.status(201).json(assetUser);
    console.log(assetUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

assetRouter.get("/getasset/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const assetuserid = await asset.findById({ _id: id });

    res.status(201).json(assetuserid);
  } catch (error) {
    res.status(422).json(error);
  }
});

assetRouter.patch("/getassetedit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateasset = await asset.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updateasset);
  } catch (error) {
    res.status(422).json(error);
  }
});

assetRouter.delete("/getassetdelet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getassetdelet = await asset.findByIdAndDelete({ _id: id });

    res.status(201).json(getassetdelet);
  } catch (error) {
    res.status(422).json(error);
  }
});

assetRouter.post("/tableasset/:id/comment", async (req, res) => {
  const { id } = req.params;
  const Comments = req.body.Comments;
  const UserComments = req.body.UserComments;

  console.log(Comments);

  const post = await asset.findById(id);

  post.Comments.push(Comments);
  post.UserComments.push(UserComments);

  const updatepost = await asset.findByIdAndUpdate(id, post, { new: true });

  res.json(updatepost);
});

assetRouter.get("/tableasset/:id/comment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getcomment = await asset.findById({ _id: id });

    res.status(201).json(getcomment);
  } catch (error) {
    res.status(422).json(error);
  }
});
module.exports = assetRouter;
