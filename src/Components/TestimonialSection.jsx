import { useState } from "react";

const testimonials = [
  {
    name: "Jeffrey Neddery",
    role: "Regular Client",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We selected Alves Architects because of their architects’ rigorous design background and education. They exceeded our expectations and emerged as leaders of our project.",
  },
  {
    name: "Sam Smith",
    role: "Regular Client",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "When we needed design and architecture specialists, your team was there for us. You took all our ideas and demands into consideration and made a great project.",
  },
  {
    name: "Ann Peters",
    role: "Regular Client",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "I have worked with many architecture companies offering design & construction services, and out of all, you were the one who really stood out from the rest.",
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
