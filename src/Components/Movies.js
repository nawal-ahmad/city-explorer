import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';

export default class Movies extends Component {
  render() {
    return (
      <div>
        <h3>Movies Related to {this.props.name.split(', ')[0]}:</h3>
        <div className='movie-card'>
          {this.props.apiData.map((movie, idx) => {
            return (
              <Card style={{ width: '18rem' }} key={idx}>
                <Card.Img
                  variant='top'
                  src={movie.poster}
                  bsPrefix='card-img'
                />
                <Card.Body>
                  <Card.Title>Title: {movie.title}</Card.Title>
                  <Card.Text>Description: {movie.overview}</Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroupItem>Rating: {movie.rating}</ListGroupItem>
                </ListGroup>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
