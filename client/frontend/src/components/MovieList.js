import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = () => {

  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];



  return (

    <Container>
      <Row>
        {movies.map(movie => 
        <Col key={movie.title}> {movie.title} </Col> )}
      </Row>
    </Container>

  )
}

export default MovieList;