import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home.js";

import PostApp from "./components/pages/PostApp.js";
import Mission from "./components/pages/Mission.js";
import Contact from "./components/pages/Contact.js";
import GalleryApp from "./components/pages/GalleryApp.js";

function App() {
  return (
    <>
     <Nav />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostApp />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryApp />} />
        
      </Routes>
      
    </>
  );
}




export default App;
