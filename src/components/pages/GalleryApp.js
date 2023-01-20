import Gallery from "../Gallery";
import cardsBG from '../.././images/team-bg-6.png'
import Video from '../Video'
import bgimg from '../.././images/flower.jpg'

function GalleryApp() {
  const galleryImages = [
    {
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div style={{ backgroundImage:`url(${bgimg})` }}>
      <br />
      <div className="gallery-header" style={{ backgroundImage:`url(${cardsBG})`}}>
        <strong> Photo Gallery</strong>
      </div>
      <br />
      <br />
      <Gallery galleryImages={galleryImages} />

      <div className="gallery-header" style={{ backgroundImage:`url(${cardsBG})`}}>
      <strong >videos</strong>
      </div>
      
      < Video />
    </div>
  );
}

export default GalleryApp;
