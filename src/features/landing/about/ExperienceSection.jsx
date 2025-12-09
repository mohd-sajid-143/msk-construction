export default function ExperienceSection() {
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* Left Stats Section */}
        <div className="grid grid-cols-2 gap-10 text-center relative">
          {/* Vertical and Horizontal Separators */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="border-r border-gray-300"></div>
            {/* Extra line between bottom left and right */}
            <div className="border-r border-gray-300 row-start-2"></div>
          </div>

          <div className="relative z-10 ">
            <h2 className="text-5xl font-light">40</h2>
            <p className="text-gray-600 text-2xl mt-2">Years of Experience</p>
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl font-light">300+</h2>
            <p className="text-gray-600 text-2xl mt-2">Completed Projects</p>
          </div>
          <div className="border-t border-gray-300 col-span-2"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-light">#01</h2>
            <p className="text-gray-600 text-2xl mt-2">Trusted Contractor</p>
          </div>

          <div className="relative z-10  pl-10">
            <h2 className="text-5xl font-light">3</h2>
            <p className="text-gray-600 text-2xl mt-2">Generations Legacy</p>
          </div>
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-5xl  mb-4">
            Experience <span className="text-[#d4a373]">—</span>{" "}
            <span className="text-sm align-middle ">since 1985</span>
          </h2>
          <p className="text-gray-600 text-2xl mb-8 leading-relaxed">
            We have been one of Jodhpur’s most renowned and trusted construction
            contractors for over four decades. Our legacy of excellence
            continues to grow with every project we complete — delivering
            quality, precision, and client satisfaction across 300+ projects.
          </p>

          <div className="flex items-center gap-6">
            <button
              class="
        bg-[#d4a373] hover:bg-[#c69666]
        text-white font-semibold uppercase
        py-3 px-8
        rounded
        shadow-lg
        transition duration-300 ease-in-out
        tracking-wider
    "
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
