import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from '../Assets/cross_icon.png';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  // Fetch all products
  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts')
      .then((res) => res.json()) 
      .then((data) => setAllProducts(data));
  };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  // Remove product function
  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    // Refetch the products after removal
    fetchInfo();
  };

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Category</p>
        <p>Subcategory</p> 
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e) => (
          <div key={e.id}>
            <div className="listproduct-format-main listproduct-format">
              <img className="listproduct-product-icon" src={e.image} alt={e.name} />
              <p className="cartitems-product-title">{e.name}</p>
              <p>{e.category}</p>
              <p>{e.subcategory}</p> 
              <img
                className="listproduct-remove-icon"
                onClick={() => removeProduct(e.id)}
                src={cross_icon}
                alt="Remove"
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
