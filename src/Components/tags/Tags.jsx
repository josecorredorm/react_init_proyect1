import Badge from 'react-bootstrap/Badge';

const Tags = ({propert, texto}) => {
  return (
   <div>
    <Badge bg={propert}>{texto}</Badge>
   </div>
  )
}
export default Tags
