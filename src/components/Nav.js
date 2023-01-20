 import { Link } from "react-router-dom";
import { useRef } from "react";

import { FaBars, FaTimes } from "react-icons/fa";


import "./nav.css";

function PostNav() {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <header className="container">
      <img src="RCCG-WEB-logo.png"  alt="chat-icon" />
      

      <nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/mission">Mission</Link>
				<Link to="/gallery">Gallery</Link>
				<Link to="/contact">About Us</Link>
				<Link to="/post">
         <img src="logo.png" height="68" width="68" alt="chat-icon" /> </Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
</header> )}



export default PostNav;
