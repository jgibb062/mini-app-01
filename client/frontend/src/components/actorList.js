import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';


const ActorList = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = async () => {
    const res = await fetch ('http://api:8080/actors');
    const data = await res.json();
    setActors(data);
  };



  return (

    <Container>
      <Row>
        {actors.map(actor => 
        <Col key={actor.id}> {actor.name} </Col> )}
      </Row>
    </Container>

  )
}

export default ActorList;