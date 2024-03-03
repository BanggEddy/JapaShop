const express = require("express");
const router = express.Router();
const SignUpTemplateCopy = require("./models/SignUpModel");
const bcrypt = require("bcrypt");
const AdminTemplateCopy = require("./models/AdminModel");
const ProductsTemplateCopy = require("./models/ProductsModel");
const Product = require("./models/ProductsModel");
const multer = require("multer");

router.post("/api/signup", async (request, response) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(request.body.password, saltPassword);

  const signedUpUser = new SignUpTemplateCopy({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/addproduct",
  upload.single("imageproduct"),
  async (request, response) => {
    try {
      const addProducs = new ProductsTemplateCopy({
        nameproduct: request.body.nameproduct,
        imageproduct: request.file.filename,
        descriptionproduct: request.body.descriptionproduct,
        quantityproduct: request.body.quantityproduct,
      });
      const savedProduct = await addProducs.save();
      response.json(savedProduct);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;

router.get("/api/goodiesadmin", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await SignUpTemplateCopy.findOne({ username: username });
    if (!user) res.json({ success: false, message: "Invalid ID#" });
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log(req.body);
      if (user.role === "user") {
        res.json({ success: true, redirectTo: "/membre" });
      } else {
        res.json({ success: false, message: "Invalid Role!" });
      }
    } else {
      res.json({ success: false, message: "Invalid Password!" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

router.post("/loginadmin", async (req, res) => {
  const { usernameadmin, passwordadmin } = req.body;
  try {
    const user = await AdminTemplateCopy.findOne({
      usernameadmin: usernameadmin,
    });
    if (!user) res.json({ message: "Invalid ID#" });
    if (user && (await bcrypt.compare(passwordadmin, user.passwordadmin))) {
      console.log(req.body);
      res.redirect("/admintrue");
    } else {
      res.json({ auth: false, message: "Invalid Password!" });
    }
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/goodies", function (req, res, next) {
  ProductsTemplateCopy.find((err, docs) => {
    if (!err) {
      res.render("list", {
        data: docs,
      });
    } else {
      console.log("Failed to retrieve the Course List: " + err);
    }
  });
});

module.exports = router;
