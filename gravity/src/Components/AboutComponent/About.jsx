import React from 'react';
import about from '../../assets/about.png';
import imageOne from '../../assets/medicalAbout.jpg';
import imageTwo from '../../assets/agriAbout.jpeg';
import imageThree from '../../assets/packing.jpg';
import imageFour from '../../assets/packingAbout.jpeg';
import vision from '../../assets/vision.jpg'
import mission from '../../assets/mission.jpg'
import selling from '../../assets/selling.jpg'
// Example products array with correct image references
const products = [
  { image: imageOne },
  { image: imageTwo },
  { image: imageThree },
  { image: imageFour },
];

const About = () => {
  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-orange-500">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4" data-aos="fade-right">
          <h2 className="text-white lg:text-5xl text-4xl font-bold lg:!leading-[56px] items-center text-center">Our Company</h2>
          <p className="text-white mt-6 text-base leading-relaxed justify-center text-justify">
          We are particularly good at just that—sourcing products from China, Taiwan, India, and Indonesia. We guide you through the process of getting quotes, evaluating factories, and managing the complexities of manufacturing and shipping. We ensure your goods are delivered when you want them—all for the best price, quality, and lead time.          </p>
          <button type="button"
            className="bg-black border-2 mt-12 text-white font-bold text-sm rounded-xl px-6 py-2.5 item-center">Get Started</button>
        </div>

        <div className="lg:h-[480px] flex items-center" data-aos="fade-left">
          <img src={about} className="w-full h-full object-cover" alt="About Our Company" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 mb-5 p-4">
        {/* Major Products Header */}
        <h1 className='text-3xl font-bold mb-4 text-center text-orange-500'>Our Famous Products</h1>
        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {products.map((product, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl w-full sm:w-80 border border-orange-500"
            >
              <div className="overflow-hidden rounded-t-xl h-64 group p-3 rounded-sm">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className='py-8 bg-gray-200'

      >
        <h1 className='text-3xl font-bold mb-4 text-center text-orange-500'>Project Management</h1>
        <p className='w-full sm:w-1/2 mx-auto text-center'>
          Our Project Management team ensures seamless coordination and efficient execution of projects from start to finish.
          We prioritize clear communication, effective resource allocation, and timely delivery to meet client expectations.
          With a focus on innovation and quality, we drive successful project outcomes. Our dedicated team works closely
          with clients to achieve their goals on time and within budget.
        </p>
      </div>
      <div className="mt-8 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
          {/* Vision Text */}
          <div className="lg:w-3/4 p-4 lg:text-left text-center" data-aos="fade-right">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">Vision</h1>
            <p className='text-xl text-justify'>
              Our vision is to be a global leader in delivering innovative and sustainable solutions. We aim to empower businesses to achieve excellence while driving positive change worldwide, creating a lasting impact for future generations.
            </p>
          </div>
          {/* Vision Image */}
          <div className="lg:w-1/2 p-4 flex justify-center">
            <img src={vision} alt="Vision Image" className="w-52 h-52 object-cover rounded-full" data-aos="fade-left"/>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between mb-8">
          {/* Mission Text */}
          <div className="lg:w-3/4 p-4 lg:text-right text-center" data-aos="fade-left">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">Mission</h1>
            <p className='text-xl text-justify'>
              Our mission is to provide top-quality services and products through cutting-edge technology, expert collaboration, and customer-centric approaches. We aim to build lasting partnerships, enhance global connectivity, and contribute to sustainable growth for our clients and communities.
            </p>
          </div>
          {/* Mission Image */}
          <div className="lg:w-1/2 p-4 flex justify-center" data-aos="fade-right">
            <img src={mission} alt="Mission Image" className="w-52 h-52 object-cover rounded-full" data-aos="fade-right"/>
          </div>
        </div>

        {/* Selling Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
          {/* Selling Text */}
          <div className="lg:w-3/4 p-4 lg:text-left text-center" data-aos="fade-right">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">Selling</h1>
            <p className='text-xl text-justify'>
              We specialize in sourcing and customizing a wide range of products, including machinery, spare parts, and various online categories, tailored to meet customer requirements. Our expertise spans imports from China, India, Taiwan, and Thailand. We ensure high-quality products that align with your specifications. Let us handle your sourcing needs with precision and reliability.
            </p>
          </div>
          {/* Selling Image */}
          <div className="lg:w-1/2 p-4 flex justify-center">
            <img src={selling} alt="Selling Image" className="w-52 h-52 object-cover rounded-full" data-aos="fade-left"/>
          </div>
        </div>
      </div>




    </div>
  );
};

export default About;
