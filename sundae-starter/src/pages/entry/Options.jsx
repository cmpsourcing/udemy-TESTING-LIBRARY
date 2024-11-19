import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { ScoopOption } from './ScoopOption';
import { ToppingOption } from './ToppingOption';
import { AlertBanner } from "../common/AlertBanner";

export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/${optionType}`);
        console.log('response', response.data);
        setItems(response.data);
      } catch (err) {
        setError(true);
      }
    };

    init();
  }, [optionType]);

  if (error) {
    // @ts-ignore
    return <AlertBanner />;
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionItems = items.map(item => <ItemComponent 
      key={item.name} 
      name={item.name} 
      imagePath={item.imagePath}
    />
  );

  return <Row>{optionItems}</Row>; 
};
