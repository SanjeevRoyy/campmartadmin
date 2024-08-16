import React from "react";
import "./CSS/Admin.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import AddProduct from "../Components/AddProduct/AddProduct";
import ListProduct from "../Components/ListProduct/ListProduct";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct"; // Import the UpdateProduct component
import { Route, Routes } from "react-router-dom";

const Admin = () => {

  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} /> {/* Add the route for UpdateProduct */}
      </Routes>
    </div>
  );
};

export default Admin;
