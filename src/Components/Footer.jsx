import Logo from "../assets/logo-1.png";
import { Facebook, Twitter, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#c44536]  text-gray-300 pt-20 pb-6 px-6 md:px-12">
      {/* --- Top Info Section --- */}
      <div className=" pb-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Call Us */}
        <div className="border-l border-gray-700 pl-6">
          <h3 className="text-xl font-semibold text-white mb-3">Call Us Now</h3>
          <p>
            Phone #1: <span className="text-[#d4a373]">+91 9929181355</span>{" "}
            <br />
            Phone #2: <span className="text-[#d4a373]">+91 8824434122</span>
          </p>
        </div>

        {/* Send a Message */}
        <div className="border-l border-gray-700 pl-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            Send a Message
          </h3>
          <p>
            email:{" "}
            <span className="text-[#d4a373]">mskconstruction@gmail.com</span>
          </p>
        </div>

        {/* Main Office */}
        <div className="border-l border-gray-700 pl-6">
          <h3 className="text-xl font-semibold text-white mb-3">Main Office</h3>
          <p>near Ayushi Green, Ashok Vihar, Jodhpur, Rajasthan 342001</p>
          <p>
            Weekdays: <span className="text-[#d4a373]">10:00AM–6:00PM</span>{" "}
            <br />
            Weekends: <span className="text-[#d4a373]">11:00AM-4:00PM</span>
          </p>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            {/* Company logo */}
            <img
              src={Logo} //
              alt="MSK Construction Logo"
              className="w-60 h-auto mr-3"
            />
          </div>
          <p className="text-sm leading-relaxed">
            We are a trusted construction company in Jodhpur, working from 3
            generations and delivering quality building, plaster, stone and tile
            works for over 40 years.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-[#d4a373] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#d4a373] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#d4a373] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-[#d4a373] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#d4a373] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              className="border border-gray-600 p-2 rounded-md hover:bg-[#d4a373] transition"
            >
              <Twitter />
            </a>
            <a
              href="https://facebook.com"
              className="border border-gray-600 p-2 rounded-md hover:bg-[#d4a373] transition"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              className="border border-gray-600 p-2 rounded-md hover:bg-[#d4a373] transition"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-100">
        © 2025 MSK Construction. All Rights Reserved.
      </div>
    </footer>
  );
}
