import React from 'react';
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const ColorFoot = () => {
  const footerLinks = [
    {
      title: "Product List",
      links: ["Forklift", "Medical Apparatus", "Engineering Machinery", "Food Machinery", "Electric Motorcycle"],
    },
    {
      title: "Product List",
      links: ["Farm Machinery", "Packing Machine", "Other Machinery", "Grain Processing", "Animal Husbandry"],
    },
    {
      title: "Contact Us",
      links: ["Email", "Phone"],
    },
    {
      title: "Information",
      links: [
        { name: "Home", link : "/" }, 
        { name: "Product List", link: "/OurProducts" },
        { name: "About Us", link: "/About" }, 
        { name: "Terms & Conditions", link: "#" }, 
        { name: "Privacy Policy", link: "#" }
      ],
    },
  ];

  const socialIcons = [
    { icon: <SiFacebook />, link: "#", label: "Facebook" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaYoutube />, link: "#", label: "YouTube" },
    { icon: <FaWhatsapp />, link: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-orange-400 p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-1">
        <div className="mt-5">
          <a href="#">
            <img src={logo} alt="Ultrafly Logo" className="w-52" />
          </a>
          <ul className="flex space-x-6 mt-4 items-center">
            {socialIcons.map((social, index) => (
              <li key={index}>
                <a href={social.link} aria-label={social.label} className="text-black hover:text-white">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-6 text-black">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link, i) =>
                typeof link === 'string' ? (
                  <li key={i}>
                    <a href="#" className="text-white hover:text-white text-sm">{link}</a>
                  </li>
                ) : (
                  <li key={i}>
                    <a href={link.link} className="text-white hover:text-white text-sm">{link.name}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-black text-sm mt-10 text-center">© Ultrafly Solutions. All rights reserved.</p>
    </footer>
  );
};

export default ColorFoot;
