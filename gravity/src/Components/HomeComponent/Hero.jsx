import React, { useEffect } from 'react';
import forklift from '../../assets/forklift.jpeg';
import logo from '../../assets/logo.png';
import hero from "../../assets/hero.png";




const Hero = () => {


  return (
    <div class="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto">
    <div class="grid md:grid-cols-2 items-center md:gap-10 gap-6">
      <div class="max-md:order-1 max-md:text-center">
        <p class="mt-4 text-sm font-bold text-orange-500"><span class="rotate-90 inline-block mr-2 mb-2">|</span> Powering Progress with Precision-Engineered Machinery</p>
        <h2 class="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]"> Powering Progress with Precision-Engineered Machinery</h2>
        <p class="mt-5 text-base text-gray-500 leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>

        <div class="mt-10 flex px-4 py-4 rounded-lg bg-gray-100 overflow-hidden">
          <input type='email' placeholder='Search Something...' class="w-full outline-none bg-transparent text-sm" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px" class="cursor-pointer fill-gray-400">
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>
      </div>

      <div class="md:h-[400px] p-2" data-aos="fade-left">
        <img src={hero} class="w-full h-full object-contain rounded-lg" alt="Dining Experience" />
      </div>
    </div>

    <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <img src="https://readymadeui.com/google-logo.svg" class="w-28 mx-auto" alt="google-logo" data-aos="fade-up"/>
      <img src="https://readymadeui.com/facebook-logo.svg" class="w-28 mx-auto" alt="facebook-logo" data-aos="fade-down"/>
      <img src="https://readymadeui.com/linkedin-logo.svg" class="w-28 mx-auto" alt="linkedin-logo" data-aos="fade-up"/>
      <img src="https://readymadeui.com/pinterest-logo.svg" class="w-28 mx-auto" alt="pinterest-logo" data-aos="fade-down"/>
    </div>
  </div>
  );
};

export default Hero;
