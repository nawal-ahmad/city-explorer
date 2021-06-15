import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.weather.map((weatherObj) => {
          return (
            <div>
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
            </div>
          );
        })}
      </div>
    );
  }
}
