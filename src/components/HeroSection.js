
// import '../App.css';
import { Button } from './Button';
import './herosection.css';
import bgimg from '.././images/Web-banner.jpg'

function HeroSection() {
  return (
    <div className='hero-container'  style={{ backgroundImage:`url(${bgimg})` }}>
      {/* <video src='' autoPlay loop muted /> */}
      <h1>Abia Province 3</h1>
      
      <div className='hero-btns'>
        <Button>
          MEN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WOMEN 
        </Button>
        <Button>
          JUNIOUR CHURCH
          <p>(teens and toddler)</p>
        </Button>
        <Button>
          YOUTH
        </Button>
        <Button>
          ELDERS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;