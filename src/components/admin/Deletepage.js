import React, { useState, useEffect } from "react";
import axios from "axios";

const Deletepage = () => {
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

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/goodiesdelete/${productId}`);
      // Rafraîchir la liste des produits après la suppression
      const updatedProducts = products.filter(
        (product) => product._id !== productId
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Boutique de Goodies Japonais</h1>
      <h2 className="subtitle">Liste des produits :</h2>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              src={`./images/${product.imageproduct}`}
              className="product-image"
              alt={product.nameproduct}
            />
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
              <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-danger"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deletepage;
