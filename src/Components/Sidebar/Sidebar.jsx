import React from 'react';
import './Sidebar.css';
import add_product_icon from '../Assets/2332073.webp';
import list_product_icon from '../Assets/6533202.png';
import update_product_icon from '../Assets/Update_Product_icon.png'; // Assuming you have an icon for updating product
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="Add Product" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="Product List" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to='/updateproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={update_product_icon} alt="Update Product" />
          <p>Update Product</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
