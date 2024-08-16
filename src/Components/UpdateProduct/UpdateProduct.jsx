import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import { backend_url } from "../../App";

const UpdateProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
    available: true,
  });
  const [imageFile, setImageFile] = useState(null);

  const fetchInfo = () => {
    fetch(`${backend_url}/products/allproducts`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setFormData({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      category: product.category,
      new_price: product.new_price,
      old_price: product.old_price,
      available: product.avilable,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    let imageUrl = formData.image;
    if (imageFile) {
      const formData = new FormData();
      formData.append("product", imageFile);
      const response = await fetch(`${backend_url}/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      imageUrl = data.image_url;
    }

    const updatedProduct = {
      ...formData,
      image: imageUrl,
    };

    await fetch(`${backend_url}/products/updateproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    fetchInfo();
    setSelectedProduct(null);
  };

  return (
    <div className="updateproduct">
      <h1>Update Product</h1>
      <div className="updateproduct-list">
        <h2>Select a Product to Update</h2>
        <div className="updateproduct-products">
          {allproducts.map((product) => (
            <div
              key={product.id}
              className="updateproduct-item"
              onClick={() => handleSelectProduct(product)}
            >
              <img src={backend_url + product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="updateproduct-form">
          <h2>Update Product Details</h2>
          <form onSubmit={handleUpdateProduct}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Image:
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
              />
            </label>
            {/* <label>
              Category:
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </label> */}
            <label>
              New Price:
              <input
                type="number"
                name="new_price"
                value={formData.new_price}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Old Price:
              <input
                type="number"
                name="old_price"
                value={formData.old_price}
                onChange={handleInputChange}
              />
            </label>
            {/* <label>
              Available:
              <select
                name="available"
                value={formData.available}
                onChange={handleInputChange}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </label> */}
            <button type="submit">Update Product</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
