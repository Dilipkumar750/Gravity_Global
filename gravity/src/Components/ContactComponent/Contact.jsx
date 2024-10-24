import React from 'react';
import packing from '../../assets/packing.jpg';
import medical from '../../assets/medical.png';

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="text-gray-800 text-sm block mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-orange-500"
    />
  </div>
);

const Contact = () => {
  return (
    <div className="font-[sans-serif]">
      {/* Banner Image */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-80">
        <img src={packing} alt="Banner Image" className="w-full h-full object-cover" />
      </div>

      <div className="-mt-16 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
          <h2 className="text-4xl text-orange-500 font-bold text-center">Product Inquiry</h2>
          
          {/* Contact Details Section */}
          <div className="mt-6 text-gray-800 flex flex-col md:flex-row" >
            <div className="md:flex-1" data-aos="fade-right">
              <p>
                At Global Exports, we're always here to help you connect, grow, and explore new opportunities.
                Whether you have a question, need more information about our services, or want to discuss a potential partnership, 
                we would love to hear from you. Feel free to reach out to us through any of the following ways:
              </p>
              <p className="mt-4 font-semibold text-orange-500" >Address:</p>
              <p>123 Business Avenue, Tech Park,</p>
              <p>Chennai - 600042, Tamil Nadu, India</p>
              <p className="mt-4 font-semibold text-orange-500">Phone:</p>
              <p>+91 98765 43210</p>
              <p className="mt-4 font-semibold text-orange-500">Email:</p>
              <p>info@globalexports.com</p>
              <p className="mt-4 font-semibold text-orange-500">Business Hours:</p>
              <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 2:00 PM</p>
            </div>
            <div className="md:flex-1 flex justify-center">
              <img src={medical} alt="Medical Services" className="w-3/4 h-auto" data-aos="fade-left"/>
            </div>
          </div>

          {/* Inquiry Form */}
          <form className="mt-8 grid sm:grid-cols-2 gap-6">
            <InputField label="Your Name" type="text" placeholder="Enter Name" />
            <InputField label="Your Email" type="email" placeholder="Email" />
            <InputField label="Your Number" type="tel" placeholder="Phone No." />
            <InputField label="Website" type="text" placeholder="Website" />
            <InputField label="Company" type="text" placeholder="Company" />
            <InputField label="Subject" type="text" placeholder="Subject" />

            <div className="col-span-full">
              <label className="text-gray-800 text-sm block mb-2">Message</label>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-orange-500"
              />
            </div>

            <div className="flex items-center col-span-full">
              <input id="checkbox1" type="checkbox" className="w-4 h-4 mr-3 shrink-0" />
              <label htmlFor="checkbox1" className="text-sm text-gray-500">
                I agree to the <a href="#terms" className="underline">Terms and Conditions</a> and <a href="#privacy" className="underline">Privacy Policy</a>
              </label>
            </div>

            <button type="button" className="text-white w-max bg-orange-500 hover:bg-orange-600 tracking-wide rounded-md text-sm px-6 py-3 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-2 inline" viewBox="0 0 548.244 548.244">
                <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
