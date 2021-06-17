import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class WeatherDay extends Component {
  render() {
    return (
      <div>
        {this.props.weatherObj.map((weatherObj) => {
          return (
            <div>
              <Card style={{ width: '25rem' }}>
                <Card.Body>
                  <Card.Title>{this.props.date}</Card.Title>
                  <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}
