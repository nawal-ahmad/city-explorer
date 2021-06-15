import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export default class Weather extends Component {
  render() {
    return (
      <>
        {this.props.weather.map((weatherObj) => {
          return (
            <>
              <ListGroup
                style={{ width: '50rem', margin: 'Auto', textAlign: 'center' }}
              >
                {weatherObj.description}
              </ListGroup>
              <ListGroup
                style={{ width: '50rem', margin: 'Auto', textAlign: 'center' }}
              >
                {weatherObj.data}
              </ListGroup>
            </>
          );
        })}
      </>
    );
  }
}
