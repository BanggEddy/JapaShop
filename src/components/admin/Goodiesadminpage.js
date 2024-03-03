import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const GoodiesAdminPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/goodiesadmin");
        setProducts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Boutique de Goodies Japonais</h1>
      <h2 className="subtitle">Liste des produits :</h2>

      <div className="product-list">
        {products.map((product) => {
          const imagePath = `./images/${product.imageproduct}`;
          console.log("Chemin de l'image :", imagePath);
          return (
            <div className="product-card" key={product._id}>
              <img src={imagePath} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.nameproduct}</h3>
                <p className="product-description">
                  {product.descriptionproduct}
                </p>
                <p className="product-quantity">
                  Quantité disponible : {product.quantityproduct}
                </p>
                <p className="product-date">
                  Date de disponibilité :{" "}
                  {new Date(product.dateproduct).toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GoodiesAdminPage;
