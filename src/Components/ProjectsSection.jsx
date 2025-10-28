import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "../assets/chaturbhuj5.jpg";
import p2 from "../assets/sonaamedihub6.jpg";
import p3 from "../assets/shah-opticals-5th-road.jpg";
import p4 from "../assets/rajbhagh6.jpg";
import Cs5 from "../assets/image-17.jpg";
import Cs6 from "../assets/image-13.jpg";

const cardsData = [
  {
    title: "Chaturbhuj Rameshchand",
    Location: "6th A Road, Sardarpura, Jodhpur, Rajasthan",
    designBy: "Mr Ar. vipul bharti",
    Owner: "Mr Rahul Agarwal",
    image: p1,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Treehouse Rajbagh",
    Location: "Jhanwar Rd, near Dali Bai Circle, Jodhpur, Rajasthan",
    designBy: "Ar. vipul bharti",
    Owner: "Mr Viksa ",
    image: p4,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Sonaa MediHub",
    Location: "Paota Main Rd, Bhadwasiya, 1st Polo, Paota, Jodhpur, Rajasthan",
    designBy: "Ar. Vipul Bharti",
    Owner: "Dr. Ajay Singh Parihar",
    image: p2,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Shah Opticals",
    Location:
      " Umaid Hospital Rd, Agarwal Ki Bagechi, Pratap Nagar, Jodhpur, Rajasthan",
    designBy: "Ar. vipul bharti",
    Owner: "Mr Ravi Shah",
    image: p3,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function ProjectsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3; // show 3 cards on large screens
  // Calculate visible cards based on current index

  const prevCard = () => {
    setStartIndex((prev) =>
      prev === 0 ? cardsData.length - visibleCards : prev - 1
    );
  };

  const nextCard = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= cardsData.length ? 0 : prev + 1
    );
  };

  //   const { title, countries, description, image, color } = cardsData[index];
  const visible = cardsData.slice(startIndex, startIndex + visibleCards);

  return (
    <div id="project">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold mb-3">Our Projects</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Every Project Tells a Story —Designed by Architects, Built by Us
        </p>
      </div>
      <div className="relative flex items-center justify-center bg-gradient-to-b from-purple-50 to-white py-16 overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevCard}
          className="absolute left-2 md:left-8 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Cards Wrapper */}
        <div className="flex gap-6 transition-transform duration-500 w-full max-w-7xl justify-center px-6 md:px-12">
          {visible.map((card) => (
            <div
              key={card.__key}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex-shrink-0 w-full sm:w-[80%] md:w-1/3 transition-all duration-500"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                <p className="text-gray-500 mb-3">{card.Location}</p>
                Architect & Design By
                <p className="text-gray-700 mb-5">{card.designBy}</p>
                Owner :<p className="text-gray-700 mb-5">{card.Owner}</p>
                <button
                  className={`px-4 py-2 rounded-lg font-medium ${card.color}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextCard}
          className="absolute right-2 md:right-8 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
