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

router.get("/api/goodiesmember", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/api/goodies", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*ADMINS */
// Route pour afficher les produits
router.get("/api/goodiesadmin", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const fs = require("fs");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
// Route pour mettre à jour un produit avec l'image
router.put(
  "/api/goodiesupdate/:productId",
  upload.single("imageproduct"),
  async (req, res) => {
    try {
      const productId = req.params.productId;
      const updatedProductData = req.body;
      const product = await Product.findById(productId);
      const oldImage = product.imageproduct;

      if (req.file && oldImage) {
        const imagePath = path.join(__dirname, "../public/images", oldImage);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath); // Supprimez l'ancienne image
        }
      }

      if (req.file) {
        updatedProductData.imageproduct = req.file.filename;
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        updatedProductData,
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: "Produit non trouvé" });
      }

      res.json({
        message: "Produit mis à jour avec succès",
        product: updatedProduct,
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du produit:", error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de la mise à jour du produit",
      });
    }
  }
);
// Route pour ajouter un new product
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
// Route pour récupérer un produit selon l'id
router.get("/api/goodiesadmin/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Erreur lors de la récupération du produit:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération du produit" });
  }
});
// Route pour supprimer un produit
router.delete("/api/goodiesdelete/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findById(productId);
    const imageToDelete = product.imageproduct;

    const imagePath = path.join(__dirname, "../public/images", imageToDelete);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await Product.findByIdAndRemove(productId);

    res.json({ message: "Produit supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du produit:", error);
    res.status(500).json({
      message: "Une erreur s'est produite lors de la suppression du produit",
    });
  }
});
module.exports = router;
