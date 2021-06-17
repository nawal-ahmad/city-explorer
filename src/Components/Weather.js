import React, { Component } from 'react';
// import { Container, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.weatherData.map((weatherObj) => {
          return (
            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title>{weatherObj.date}</Card.Title>
                <Card.Text>{weatherObj.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
