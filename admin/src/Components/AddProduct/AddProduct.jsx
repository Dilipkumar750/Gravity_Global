import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for button
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "women",
  });
  const categories = {
    'All Category': [],
    'Forklift': [],
    'Amusement Equipment': [],
    'Other Machinery': [],
    'Medical Apparatus and Instruments': [
      'Mask machine',
    ],
    'Engineering Machinery': [
      'Wood sawdust pellet heating fireplace',
      'Wood Pellet Mill',
      'Beach sand Cleaning Machine',
      'Brick machine',
      'Diesel Fan Heater',
      'Snow thrower',
      'Steel rebar cutting machine',
      'Rebar Bending Machine',
      'Stone crusher',
      'Forklift',
      'Lift Tables',
      'Hoisting machinery',
      'Loader machine',
      'Tracked transporter',
      'Truck crane',
      'Tricycle',
    ],
    'Food Machinery': [
      'Juicer',
      'Rice puffing machine',
      'Corn popper',
      'Popcorn Maker',
      'Sawmill',
      'Ice Machines',
      'Hot dogs egg baking Machine',
      'Donut machine',
      'Vegetable cutter',
      'Starch separator',
      'Ice cream machine',
      'Bread machine',
      'Oil press',
    ],
    'Electric Motorcycle': [],
    'Ranch Machinery': [
      'Sheep shears',
    ],
    'Packaging Machine': [
      'Vacuum Packing Machines',
      'Small Sealing Machine',
      'Other packing machine',
    ],
    'Grain Processing Machinery': [],
    'Farm Machinery': [
      'Stump grinder',
      'Animal Feeders',
      'Plucker',
      'Egg Incubators',
      'Other Farm Machines',
    ],
    'Animal Husbandry Machinery': [],
    'Tools': [],
    'Agricultural Product Processing Machinery': [],
    'Garden Tool': [],
    'Cultivator': [],
    'Surface Drill': [
      'Excavator',
    ],
    'Rubber V Belt and Timing Belts': [
      'Agricultural machinery Belt',
      'PK Belts',
      'Automotive timing Belt',
      'Industrial timing Belt',
      'Classical wrapped V belt',
      'Narrow wrapped V belt',
      'Multi Joint V common V belt',
      'Conveyer Belt',
      'Synchronous Pulley and Belt',
    ],
    'Farm Implements': [
      'Water Well Drilling Machine',
      'Walking tractor',
      'Tractor',
      'Cultivator',
      'Rice transplanter',
      'Mini mower',
      'Road snow sweeper',
      'Shellers',
      'Vegetable Seed Planter',
      'Fertilizer Spreaders',
      'Drum lawn Mower',
      'Other farm machine',
      'Balers',
      'Wheat corn seeder',
      'Rotary Tiller',
      'Subsoiler',
      'Front End Loader',
      'Potato seeder',
      'Tractor Trailer',
      'Disc Harrow',
      'Furrow Plough',
      'Harvester',
    ],
    'Ungrouped': [],

  };

  // Function to add product
  const AddProduct = async () => {
    // Basic validation
    if (!productDetails.name || !productDetails.description || !image) {
      alert("Please fill all the fields and upload an image.");
      return;
    }

    setLoading(true); // Set loading state
    let dataObj;
    let product = { ...productDetails }; // Clone to avoid direct mutation

    let formData = new FormData();
    formData.append("image", image);

    // Upload the image first
    try {
      const uploadResp = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      dataObj = await uploadResp.json();

      if (dataObj.success) {
        product.image = dataObj.image_url;

        // Add product details
        const addProductResp = await fetch("http://localhost:4000/addproduct", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        const addProductData = await addProductResp.json();

        // Handle success/failure alert
        addProductData.success ? alert("Product Added") : alert("Failed");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Handle input change for text fields
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  // Handle image change
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
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

      <div className="addproduct-itemfield" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Category dropdown */}
        <div style={{ marginRight: '20px', flex: '1' }}>
          <p style={{ marginBottom: '5px' }}>Product Category</p>
          <select
            value={productDetails.category}
            name="category"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: '100%', minWidth: '150px' }} 
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory dropdown */}
        <div style={{ flex: '1' }}>
          <p style={{ marginBottom: '5px' }}>Product SubCategory</p>
          <select
            value={productDetails.subcategory}
            name="subcategory"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: '100%', minWidth: '150px' }} 
            disabled={!productDetails.category}
          >
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
        disabled={loading} // Disable button during loading
      >
        {loading ? "Adding..." : "ADD"}
      </button>
    </div>
  );
};

export default AddProduct;
