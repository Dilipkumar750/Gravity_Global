import React, { useState } from 'react';
import product from '../../assets/product.jpg'
import agri from '../../assets/agri.jpg';
import amusement from '../../assets/amusement.jpeg';
import graining from '../../assets/graining.jpeg';
import forklift from '../../assets/forklift 1.jpg';
import { Link } from 'react-router-dom';

// Sample data for categories and subcategories
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
const products = [
    { image: graining, title: 'Graining Processing Machine', description: 'Efficient graining process for higher output.' },
    { image: agri, title: 'Agricultural Machinery', description: 'Innovative machinery for advanced farming.' },
    { image: amusement, title: 'Amusement Rides', description: 'High-quality, safe amusement rides.' },
    { image: forklift, title: 'Forklift Machines', description: 'Heavy-duty forklifts for industrial use.' },
    { image: graining, title: 'Graining Processing Machine', description: 'Efficient graining process for higher output.' },
    { image: agri, title: 'Agricultural Machinery', description: 'Innovative machinery for advanced farming.' },
    { image: amusement, title: 'Amusement Rides', description: 'High-quality, safe amusement rides.' },
    { image: forklift, title: 'Forklift Machines', description: 'Heavy-duty forklifts for industrial use.' },
    { image: graining, title: 'Graining Processing Machine', description: 'Efficient graining process for higher output.' },
    { image: agri, title: 'Agricultural Machinery', description: 'Innovative machinery for advanced farming.' },
    { image: amusement, title: 'Amusement Rides', description: 'High-quality, safe amusement rides.' },
    { image: forklift, title: 'Forklift Machines', description: 'Heavy-duty forklifts for industrial use.' },
    { image: graining, title: 'Graining Processing Machine', description: 'Efficient graining process for higher output.' },
    { image: agri, title: 'Agricultural Machinery', description: 'Innovative machinery for advanced farming.' },
    { image: amusement, title: 'Amusement Rides', description: 'High-quality, safe amusement rides.' },
    { image: forklift, title: 'Forklift Machines', description: 'Heavy-duty forklifts for industrial use.' },
];

const CategorySection = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (category) => {
        if (categories[category].length > 0) {
            setOpenCategory(openCategory === category ? null : category);
        }
    };

    return (
        <div className=" h-full mb-10">
            <div
                className="relative text-white py-16 px-8 font-sans bg-black sm:bg-cover sm:bg-center"
                style={{ backgroundImage: `url(${product})` }}
            >
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-8">
                    <div className="md:w-2/5 md:text-left">
                        <h2 className="text-3xl mb-4 font-bold text-orange-500">Elevate Your Business with Quality Machinery</h2>
                        <p className="text-base text-gray-300 font-bold">
                            Explore our premium range of forklifts and medical machinery designed to enhance your productivity and efficiency.
                            Enroll now to access exclusive offers and expert advice on the right equipment for your needs!
                        </p>
                    </div>

                    <div className="md:w-1/2 flex">
                        <button type="button" className="bg-orange-500 text-gray-800 py-3 px-6 font-semibold rounded">
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Section */}
            <h2 className="text-3xl text-orange-500 font-bold text-center mt-10">Product Categories</h2>
            <div className="mt-6 flex flex-col md:flex-row">
                {/* Sticky Category Sidebar */}
                <div className="sm:sticky  top-2 h-full w-full md:w-1/4 md:mr-10 bg-white shadow-md">
                    {Object.keys(categories).map((category, index) => (
                        <div className="border-b border-gray-200" key={index}>
                            <h2 className="bg-gray-100 px-4 py-2">
                                <button
                                    className={`flex justify-between w-full text-left text-md font-medium text-gray-700 ${categories[category].length === 0}`}
                                    onClick={() => toggleCategory(category)}
                                    disabled={categories[category].length === 0}
                                >
                                    {category}
                                    {categories[category].length > 0 && (
                                        <span className={`transition-transform transform text-orange-500 ${openCategory === category ? 'rotate-90' : ''}`}>
                                            ➔
                                        </span>
                                    )}
                                </button>
                            </h2>
                            {categories[category].length > 0 && (
                                <div className={`${openCategory === category ? 'block' : 'hidden'} px-4 py-2`}>
                                    <div className="text-gray-600">
                                        {categories[category].map((subCategory, subIndex) => (
                                            <div key={subIndex} className="text-md mb-1 ml-4">
                                                {subCategory}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Products Section */}
                <div className="flex flex-wrap justify-center md:w-3/4 h-fit gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white shadow-sm rounded-xl w-full md:w-60 border border-orange-500 overflow-hidden transition-transform transform hover:scale-105">
                            <div className="overflow-hidden rounded-t-xl h-64 group">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col justify-between h-60 p-4 bg-gray-100">
                                <div className="text-center flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                                </div>
                                <div className="flex justify-center">
                                    <a href='https://wa.me/6018464154'>
                                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                                            Chat Now..
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    );
};

export default CategorySection;
