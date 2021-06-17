import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.weatherData.map((weatherObj) => {
          return (
            <Container>
              <ListGroup
                style={{ width: '50rem', margin: 'Auto', textAlign: 'center' }}
              >
                {weatherObj.description}
              </ListGroup>
              <ListGroup
                style={{ width: '50rem', margin: 'Auto', textAlign: 'center' }}
              >
                {weatherObj.date}
              </ListGroup>
            </Container>
          );
        })}
      </div>
    );
  }
}
