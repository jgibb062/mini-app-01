import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';


const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch ('http://api:8080/movies');
    const data = await res.json();
    setMovies(data);
  };



  return (

    <Container>
      <Row>
        {movies.map(movie => 
        <Col key={movie.id}> {movie.title} </Col> )}
      </Row>
    </Container>

  )
}

export default MovieList;