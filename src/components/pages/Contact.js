import MapContainer from '../mapContainer.js'
import cardsBG from '../.././images/team-bg-6.png'
import Footer from '../Footer';

function Contact() {
    return ( 
    <div>
      <div className="contact-header" style={{ backgroundImage:`url(${cardsBG})`}}>
        <h1 >about us</h1>
      <div />
      
      <div>
      <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <span class="fw-bold">Main Location:</span> 16 Old Timber Rd,
                440236, Umuahia, Abia
              </li>
             

              <li class="list-group-item">
                <span class="fw-bold">Email:</span> (555) enroll@frontendbc.test
              </li>
            </ul>
      < MapContainer />

      </div>
     
    </div>
    <Footer />
      </div>
    );
  }

  export default Contact;