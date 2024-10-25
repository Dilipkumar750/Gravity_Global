import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../Assets/cross_icon.png";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  getAllProduct,
  getImageUrl,
} from "../../slices/productSlice";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const dispatch = useDispatch();

  const { data, error } = useSelector((state) => state.product.getAllProduct);
  const { data: deleteData } = useSelector(
    (state) => state.product.deleteProduct
  );

  const removeProduct = (id) => {
    dispatch(deleteProduct({ id }));
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch, deleteData]);

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <table style={{width:"100%"}}>
        <thead>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Subcategory</th>
          <th>Action</th>
        </thead>
        <tbody>
          {data &&
            data.map((e) => {
              const imageUrl = getImageUrl(e.image);
              return (
                <tr>
                  <td>
                    <img
                      className="listproduct-product-icon"
                      src={imageUrl}
                      alt={e.title}
                    />
                  </td>
                  <td>{e.title}</td>
                  <td>{e.category}</td>
                  <td>{e.subCategory}</td>
                  <td>
                    <button type="button" className="deleteBtn" onClick={() => removeProduct(e._id)}>Delete</button>
                    <Link to={`/edit/${e._id}`}><button type="button" className="editBtn">Edit</button></Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
