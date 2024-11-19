import Col from 'react-bootstrap/Col';

export const ScoopOption = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={3} style={{ textAlign: 'center' }} >
      <img 
        style={{ width: '75%' }} 
        alt={name} 
        src={`http://localhost:3030/${imagePath}`} 
      />
    </Col>
  );
};
