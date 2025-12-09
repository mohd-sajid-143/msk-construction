import bg1 from "../../../assets/images/slide-1.jpg";
import line from "../../../assets/images/line.png";

function FirstLook() {
  return (
    <>
      <main id="home">
        {/* Hero Section */}
        <div className="relative w-full h-screen">
          {/* Background image */}
          <img src={bg1} alt="bg" className="w-full h-full object-cover" />

          {/* Overlay content */}
          <div
            className="absolute top-[20%] left-[10%]  
            flex flex-col gap-1"
          >
            <span
              className="font-['IBM_Plex_Mono'] font-semibold 
              text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px]"
            >
              Welcome to Msk <br /> Construction
            </span>

            <img
              src={line}
              className="w-[300px] sm:w-[400px] md:w-[500px]"
              alt=""
            />

            <span
              className="font-['IBM_Plex_Mono'] font-semibold 
              text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]"
            >
              Leading Construction Solution Provider
            </span>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#c44536] mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 px-6 sm:px-12 md:px-20 py-10 text-center sm:text-left">
          <span
            className="text-white font-['IBM_Plex_Mono'] font-semibold 
            text-[28px] sm:text-[28px] md:text-[28px] lg:text-[36px]"
          >
            From your dream to your doorstep
          </span>

          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#d4a373] hover:bg-[#c69666]
            text-white font-semibold uppercase
            py-3 px-8 rounded shadow-lg
            transition duration-300 ease-in-out tracking-wider"
          >
            Get A Quote
          </button>
        </div>
      </main>
    </>
  );
}
export default FirstLook;
