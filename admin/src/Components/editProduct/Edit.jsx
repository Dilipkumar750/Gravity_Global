import React, { useEffect, useState } from "react";
import "../AddProduct/AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, getOneProduct, updateProduct } from "../../slices/productSlice";
import { useParams } from "react-router-dom";


const Edit = () => {
    const {id} = useParams()
  const dispatch = useDispatch();
  const { isLoading,data:updateData,error:updateError } = useSelector((state) => state.product.updateProduct);
  const { data,error } = useSelector((state) => state.product.getOneProduct);

  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for button
  const [productDetails, setProductDetails] = useState({
    _id:"",
    title: "",
    description: "",
    image: "",
    category: "",
    subCategory: "",
  });
  const categories = {
    "All Category": [],
    Forklift: [],
    "Amusement Equipment": [],
    "Other Machinery": [],
    "Medical Apparatus and Instruments": ["Mask machine"],
    "Engineering Machinery": [
      "Wood sawdust pellet heating fireplace",
      "Wood Pellet Mill",
      "Beach sand Cleaning Machine",
      "Brick machine",
      "Diesel Fan Heater",
      "Snow thrower",
      "Steel rebar cutting machine",
      "Rebar Bending Machine",
      "Stone crusher",
      "Forklift",
      "Lift Tables",
      "Hoisting machinery",
      "Loader machine",
      "Tracked transporter",
      "Truck crane",
      "Tricycle",
    ],
    "Food Machinery": [
      "Juicer",
      "Rice puffing machine",
      "Corn popper",
      "Popcorn Maker",
      "Sawmill",
      "Ice Machines",
      "Hot dogs egg baking Machine",
      "Donut machine",
      "Vegetable cutter",
      "Starch separator",
      "Ice cream machine",
      "Bread machine",
      "Oil press",
    ],
    "Electric Motorcycle": [],
    "Ranch Machinery": ["Sheep shears"],
    "Packaging Machine": [
      "Vacuum Packing Machines",
      "Small Sealing Machine",
      "Other packing machine",
    ],
    "Grain Processing Machinery": [],
    "Farm Machinery": [
      "Stump grinder",
      "Animal Feeders",
      "Plucker",
      "Egg Incubators",
      "Other Farm Machines",
    ],
    "Animal Husbandry Machinery": [],
    Tools: [],
    "Agricultural Product Processing Machinery": [],
    "Garden Tool": [],
    Cultivator: [],
    "Surface Drill": ["Excavator"],
    "Rubber V Belt and Timing Belts": [
      "Agricultural machinery Belt",
      "PK Belts",
      "Automotive timing Belt",
      "Industrial timing Belt",
      "Classical wrapped V belt",
      "Narrow wrapped V belt",
      "Multi Joint V common V belt",
      "Conveyer Belt",
      "Synchronous Pulley and Belt",
    ],
    "Farm Implements": [
      "Water Well Drilling Machine",
      "Walking tractor",
      "Tractor",
      "Cultivator",
      "Rice transplanter",
      "Mini mower",
      "Road snow sweeper",
      "Shellers",
      "Vegetable Seed Planter",
      "Fertilizer Spreaders",
      "Drum lawn Mower",
      "Other farm machine",
      "Balers",
      "Wheat corn seeder",
      "Rotary Tiller",
      "Subsoiler",
      "Front End Loader",
      "Potato seeder",
      "Tractor Trailer",
      "Disc Harrow",
      "Furrow Plough",
      "Harvester",
    ],
    Ungrouped: [],
  };

  // Function to add product
  const AddProduct = async () => {
    dispatch(updateProduct({ productDetails, image }));
  };

  // Handle input change for text fields
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  // Handle image change
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(getOneProduct({id}))
    if (data) {
        setProductDetails(data)
    }
  }, [dispatch,id])
  
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          type="text"
          name="title"
          value={productDetails.title}
          onChange={changeHandler}
          placeholder="Type here"
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Description</p>
        <input
          name="description"
          value={productDetails.description}
          onChange={changeHandler}
          placeholder="Type here"
          style={{ height: "200px" }}
        />
      </div>

      <div
        className="addproduct-itemfield"
        style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Category dropdown */}
        <div style={{ marginRight: "20px", flex: "1" }}>
          <p style={{ marginBottom: "5px" }}>Product Category</p>
          <select
            value={productDetails.category}
            name="category"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: "100%", minWidth: "150px" }}>
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory dropdown */}
        <div style={{ flex: "1" }}>
          <p style={{ marginBottom: "5px" }}>Product SubCategory</p>
          <select
            value={productDetails.subCategory}
            name="subCategory"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: "100%", minWidth: "150px" }}
            disabled={!productDetails.category}>
            <option value="">Select SubCategory</option>
            {categories[productDetails.category]?.map((subcat) => (
              <option key={subcat} value={subcat}>
                {subcat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Upload Image</p>
        <label htmlFor="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? upload_area : URL.createObjectURL(image)}
            alt="Upload area"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button
        className="addproduct-btn"
        onClick={AddProduct}
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "ADD"}
      </button>
    </div>
  );
};

export default Edit;
