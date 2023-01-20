import cardsBG from '../.././images/team-bg-6.png'
import "./mission.css"
import Footer from '../Footer';
function Mission() {
    return (
      <div>
        <div className="mission-header" style={{ backgroundImage:`url(${cardsBG})`}}>
          <h1>MISSION AND VISION</h1>
        </div>
  
        <div className="mission">
          <div className="point">
            <h2> To make heaven.</h2>
            <h2> To take as many people with us.</h2>
            <h2> To have a member of RCCG in every family of all nations.</h2>
            <h2> To accomplish No. 1 above, holiness will be our lifestyle.</h2>
            <h2>
              To accomplish No. 2 and 3 above, we will plant churches within five
              minutes walking distance in every city and town of developing
              countries and within five minutes driving distance in every city and
              town of developed countries.
            </h2>
            <h2>
              We will pursue these objectives until every Nation in the world is
              reached for the Lord Jesus Christ
            </h2>
          </div>
  
          <div>
            <img src="eaa77c.png" height="" width="" alt="chat-icon" />
          </div>
        </div>

        <Footer />
     
      </div>
    );
  }

  export default Mission;