import React from "react";
import "./navbar.css";
const Navbar = () => {
  let HeaderLinks = ["Home", "About", "Services", "Contact"];

    // Get the navbar element
    var navbar = document.querySelector(".navbar");

    // Add a scroll event listener to the window
    window.addEventListener("scroll", function () {
    // Check the scroll position
    var scroll = window.scrollY || window.pageYOffset;

    // Add or remove the box shadow class based on the scroll position
    if (scroll > 0) {
      navbar.classList.add("shadow-md"); // Adjust the shadow class as needed
    } else {
      navbar.classList.remove("shadow-md");
    }
  });

  return (
    <>
      <header className="navbar w-full fixed top-0 bg-white transition-all">
        <div className="container mx-auto grid grid-flow-col py-8">
          <div className="col-start-1 col-end-2 HeaderLogo font-medium text-2xl uppercase" id="HeaderLogo">
            My <b class="font-black">Company</b>
          </div>
          <ul className="col-start-4 col-end-8 flex gap-4">
            <li className="w-3/12"><a href="#">{HeaderLinks[0]}</a></li>
            <li className="w-3/12"><a href="#">{HeaderLinks[1]}</a></li>
            <li className="w-3/12"><a href="#">{HeaderLinks[2]}</a></li>
            <li className="w-3/12"><a href="#">{HeaderLinks[3]}</a></li>
          </ul>
          
          <div class="col-start-9 col-end-12">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
      </header>
      
    </>
  );
};
export default Navbar;
