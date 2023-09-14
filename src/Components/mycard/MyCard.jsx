import Card from 'react-bootstrap/Card';
import './mycard.css'
import Tags from '../tags/Tags';
import BottonCard from '../bottoncard/BottonCard';
const MyCard = ({ title, img, description, propert, texto}) => {
  return (
    <Card className='mycard' style={{ width: '18rem' }}>
      <Card.Img className='imgstyle' variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Tags 
         propert={propert}
         texto={texto}/>
        <Card.Text className='cardtextop'>
          {description}
        </Card.Text>
        <BottonCard varcolor={propert}/>
      </Card.Body>
    </Card>
  );
}

export default MyCard