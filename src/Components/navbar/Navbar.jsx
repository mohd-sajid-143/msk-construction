import { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo-1.png";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setShowMenu(!showMenu);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  // ✅ Smooth scroll handler
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false); // Close mobile menu after click
  };

  return (
    <nav className="top-0 left-0 w-full bg-[#f4f3ef] border-b shadow-2xl fixed border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={Logo} alt="MSK Construction" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Services", id: "services" },
            { name: "Projects", id: "project" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="text-lg hover:text-[#d4a373] font-medium hover:underline"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => alert("Login Clicked")}
            className="bg-[#d4a373] text-black px-4 py-1 rounded-full text-lg font-semibold hover:bg-[#c69666]"
          >
            Login →
          </button>
        </div>

        {/* Mobile View */}
        <div className="flex items-center gap-4 md:hidden">
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Overlay */}
      {showMenu && <div className="fixed inset-0 bg-opacity-40 z-40"></div>}

      {/* Mobile Menu */}
      <div ref={menuRef}>
        <ResponsiveMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          handleNavigation={handleNavigation}
        />
      </div>
    </nav>
  );
}
