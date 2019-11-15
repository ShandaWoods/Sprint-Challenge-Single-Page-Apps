import React, { useState } from "react";
import { Card, CardTitle, CardText, CardColumns, Collapse, Button, } from 'reactstrap';
import '../index.css';

const CharacterCard = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen (!isOpen);

  return (
    <div className="person-data" key={props.id}>
      <Button color="info" onClick={toggle} style={{ marginBottom: '1rem'}}>Click to see if I'm Pickle Rick</Button>
        <Collapse isOpen={isOpen}>
          <CardColumns>
            <Card body inverse color="success">
      <div className="cardInfo">
        <CardTitle>Name:{props.name}</CardTitle>
        <CardText>Species:{props.species}</CardText>
        <CardText>Type:{props.type}</CardText>
      </div>
            </Card>
          </CardColumns>
        </Collapse>    
    </div>
  ); 
  
}

export default CharacterCard;