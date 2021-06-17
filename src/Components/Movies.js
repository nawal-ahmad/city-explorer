import React, { Component } from 'react';
// import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';

export default class Movies extends Component {
  render() {
    return (
      <div>
        {this.props.moviesData.map((moviesObj) => {
          return (
            <Card style={{ width: '25rem' }}>
              <Card.Img variant='top' src={moviesObj.image_url} />
              <Card.Body>
                <Card.Title>{moviesObj.title}</Card.Title>
                <Card.Text>{moviesObj.overview}</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>
                  popularity : {moviesObj.popularity}{' '}
                </ListGroupItem>
                <ListGroupItem>
                  Total Votes : {moviesObj.total_votes}{' '}
                </ListGroupItem>
                <ListGroupItem>
                  Average Votes : {moviesObj.average_votes}{' '}
                </ListGroupItem>
                <ListGroupItem>
                  Released On : {moviesObj.released_on}{' '}
                </ListGroupItem>
              </ListGroup>
            </Card>
          );
        })}
      </div>
    );
  }
}
