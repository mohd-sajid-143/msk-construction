// import React, { useState, useEffect } from "react";
// import Cs1 from "../assets/image-3.jpg";
// import Cs2 from "../assets/image-21.jpg";
// import Cs3 from "../assets/image-25.jpg";
// import Cs4 from "../assets/image-18.jpg";
// import Cs5 from "../assets/image-17.jpg";
// import Cs6 from "../assets/image-13.jpg";

// // Example images (replace these paths with your own images)
// const cardImages = [Cs1, Cs2, Cs3, Cs6, Cs5];

// const AboutUs = () => {
//   const [currentImageIdx, setCurrentImageIdx] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIdx((prevIdx) =>
//         prevIdx === cardImages.length - 1 ? 0 : prevIdx + 1
//       );
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex justify-around py-20">
//       {/* Left Side Content */}
//       <div className="w-[40%] ">
//         <p className="text-2xl  text-gray-600 mb-4">
//           We are a trusted name in the construction industry, proudly serving
//           Jodhpur for over three generations. With more than 40 years of
//           experience, we have built a strong reputation as one of the most
//           reliable and renowned contractors in the region. Over the decades, our
//           commitment to quality, craftsmanship, and client satisfaction has
//           allowed us to successfully deliver 300+ residential, commercial, and
//           industrial projects. From structural construction to finishing work,
//           we ensure every project reflects durability, precision, and
//           excellence.
//         </p>
//       </div>

//       {/* Right Side Card View */}
//       <div className="flex w-[40%] justify-center">
//         <img
//           src={cardImages[currentImageIdx]}
//           alt="Card Display"
//           className="rounded-lg mb-4 w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React, { useState, useEffect } from "react";
import Cs1 from "../assets/image-3.jpg";
import Cs2 from "../assets/image-21.jpg";
import Cs3 from "../assets/image-25.jpg";
import Cs4 from "../assets/image-18.jpg";
import Cs5 from "../assets/image-17.jpg";
import Cs6 from "../assets/image-13.jpg";

// Example images (replace these paths with your own images)
const cardImages = [Cs1, Cs2, Cs3, Cs6, Cs5];

const AboutUs = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prevIdx) =>
        prevIdx === cardImages.length - 1 ? 0 : prevIdx + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id=""
      className="flex flex-col md:flex-row items-center justify-between gap-10 px-10 md:px-12 py-8 bg-[#f4f3ef]"
    >
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 ">
        <p className="text-[18px] w-full  md:text-[20px] text-gray-700 leading-relaxed">
          We are a trusted name in the construction industry, proudly serving
          Jodhpur for over three generations. With more than 40 years of
          experience, we have built a strong reputation as one of the most
          reliable and renowned contractors in the region. Over the decades, our
          commitment to quality, craftsmanship, and client satisfaction has
          allowed us to successfully deliver 300+ residential, commercial, and
          industrial projects. From structural construction to finishing work,
          we ensure every project reflects durability, precision, and
          excellence.
        </p>
      </div>

      {/* Right Side Card View */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={cardImages[currentImageIdx]}
          alt="Construction Project"
          className="rounded-lg shadow-xl w-full max-w-[500px] h-auto object-cover transition-all duration-700"
        />
      </div>
    </section>
  );
};

export default AboutUs;
