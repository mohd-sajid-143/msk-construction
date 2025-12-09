import React from "react";
import "./trustedby.css";
import T1 from "../../../assets/images/trust1.png";
import T2 from "../../../assets/images/trust2.png";
import T3 from "../../../assets/images/trust3.png";
import T4 from "../../../assets/images/dna.jpg";
import T5 from "../../../assets/images/trust5.png";
import T6 from "../../../assets/images/trust6.png";

export default function TrustedBy() {
  const firms = [
    {
      name: "Aayat Design",
      logo: T1,
    },
    {
      name: "",
      logo: T2,
    },
    {
      name: "Maa Architects & Interiors",
      logo: T3,
    },
    {
      name: "The Dhoot's Nirmaan Associates",
      logo: T4,
    },
    {
      name: "",
      logo: T5,
    },
    {
      name: "",
      logo: T6,
    },
  ];

  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl text-white font-semibold mb-3">Trusted By</h2>
        <p className="text-[#f4eeee] mb-12 text-lg">
          Leading Architects & firms
        </p>
      </div>
      <div className="overflow-hidden relative">
        <div className="animate-scroll gap-16 px-10">
          {[...firms, ...firms].map((firms, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center space-y-2 min-w-[120px]"
            >
              <img
                src={firms.logo}
                alt={firms.name}
                className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <p className="text-black text-sm md:text-base font-medium">
                {firms.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
