import React from "react";
import Logo from "../../../assets/icons/logo-1.png";
import Login from "../../../features/auth/login";
import LoginPage from "../../../pages/LoginPage";

function ResponsiveMenu({ showMenu, setShowMenu, handleNavigation }) {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed transition-all duration-300 bottom-0 top-0 w-[75%] pt-6 px-4 bg-[#f4f3ef] z-50`}
    >
      <div className="flex justify-center mb-6">
        <a href="/" onClick={() => setShowMenu(false)}>
          <img src={Logo} alt="MSK Construction" className="h-10 w-auto" />
        </a>
      </div>

      <div className="gap-3 flex flex-col">
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
            className="text-lg py-3 px-2 text-left font-medium hover:underline"
          >
            {item.name}
          </button>
        ))}

        <button
          onClick={() => {
            <LoginPage />;
            setShowMenu(false);
          }}
          className="bg-[#d4a373] text-black mt-6 px-4 py-1 rounded-full text-lg font-semibold hover:bg-[#c69666]"
        >
          Login →
        </button>
      </div>
    </div>
  );
}
export default ResponsiveMenu;
