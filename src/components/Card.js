import './cards.css';
import CardItem from './CardItem';
import cardsBG from '.././images/team-bg-6.png'

function Cards() {
  return (
        <div className='cards' style={{ backgroundImage:`url(${cardsBG})` }}>
     
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='mission-bg.jpg'
              text='write up'
              label='theme'
              path='/'
            />
            <CardItem
              src='mission-bg.jpg'
              text='write up'
              label='theme'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='mission-bg.jpg'
              text='write up'
              label='theme'
              path='/'
            />
            <CardItem
              src='mission-bg.jpg'
              text='write up'
              label='theme'
              path='/'
            />
            <CardItem
              src='mission-bg.jpg'
              text='theme'
              label='theme'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;