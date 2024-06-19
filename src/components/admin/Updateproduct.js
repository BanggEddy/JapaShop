import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Updateproduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    nameproduct: "",
    descriptionproduct: "",
    quantityproduct: 0,
    imageproduct: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (event) => {
    setProduct({ ...product, imageproduct: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nameproduct", product.nameproduct);
      formData.append("descriptionproduct", product.descriptionproduct);
      formData.append("quantityproduct", product.quantityproduct);
      if (product.imageproduct) {
        // Vérifiez si une image est sélectionnée
        formData.append("imageproduct", product.imageproduct);
      }

      await axios.put(`/api/goodiesupdate/${productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du produit:", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/goodiesadmin/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du produit:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="container">
      <h1 className="title">Modifier le produit</h1>
      <form
        onSubmit={handleSubmit}
        className="form"
        encType="multipart/form-data"
      >
        <div className="form-group">
          <label className="form-label">Nom du produit:</label>
          <input
            type="text"
            name="nameproduct"
            value={product.nameproduct}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <textarea
            name="descriptionproduct"
            value={product.descriptionproduct}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Quantité:</label>
          <input
            type="text"
            name="quantityproduct"
            value={product.quantityproduct}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Image:</label>
          <input
            type="file"
            name="imageproduct"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default Updateproduct;
