import { useState } from "react";
import T1 from "../../../assets/images/vipul.jpg";
import T2 from "../../../assets/images/dr-sonal-parihar.png";
import T3 from "../../../assets/images/dr-ajay-singh-parihar.jpg";
const testimonials = [
  {
    name: "Ar. Vipul Bharti",
    role: "Regular Client",
    img: T1,
    text: "We have worked with MSK Construction on multiple commercial projects, and every time they’ve exceeded expectations. Their 40+ years of experience clearly shows in the way they plan and execute projects. The workmanship and finishing are top-notch!",
  },
  {
    name: "Dr. Sonal Parihar",
    role: "Regular Client",
    img: T2,
    text: "From start to finish, MSK Construction made the entire building process smooth and stress-free. The team handled everything professionally and completed our farmhouse within the promised timeline. We’re extremely happy with the results!",
  },
  {
    name: "Dr. Ajay singh Parihar",
    role: "Regular Client",
    img: T3,
    text: "MSK Construction delivered outstanding results for our new home project. Their attention to detail and commitment to quality were truly impressive.Highly recommended for anyone looking for reliable construction services in Jodhpur!",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full  py-16 flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-3">Our Testimonials</h2>
      <p className="text-gray-600 mb-12 text-lg">What Our Clients Say</p>

      {/* Testimonial Cards */}
      <div className="w-full mt-12 max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-8 transition-all">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`relative w-[90%] sm:w-1/3 border border-gray-200 rounded-xl shadow-sm p-8 text-center transition-all duration-500 ${
              i === activeIndex
                ? "opacity-100 scale-100"
                : "opacity-50 scale-95"
            }`}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            <p className="text-gray-600 mt-10 mb-6 leading-relaxed text-sm">
              {t.text}
            </p>
            <div className="flex justify-center items-center gap-2 text-sm">
              <span className="font-semibold text-black">{t.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex mt-8 space-x-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex ? "bg-[#d4a373] scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
