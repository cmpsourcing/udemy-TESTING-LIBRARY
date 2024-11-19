import Container from 'react-bootstrap/Container';
import { OrderEntry } from './pages/entry/OrderEntry';
import { OrderDetails } from './contetxs/OrderDetails';

function App() {
  return (
    <Container>
      <OrderDetailsProvider> 
        <OrderEntry />
      </OrderDetailsProvider> 
    </Container>
  );
}

export default App;
