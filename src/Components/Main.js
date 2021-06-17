import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Weather from './Weather';
import Movies from './Movies';

export default class Main extends Component {
  constructor(state) {
    super(state);
    this.state = {
      data: '',
      location: '',
      lat: '',
      lon: '',
      display: false,
      moviesData: '',
      weatherData: '',
      alert: '',
      error: false,
    };
  }

  updateLocation = (e) => {
    console.log(e.target.value);
    this.setState({
      location: e.target.value,
    });
  };

  getLocation = async (e) => {
    e.preventDefault();
    try {
      console.log(this.state.location);
      await axios
        .get(
          `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=
      ${this.state.location}&format=json`
        )
        .then((locationIQResponse) => {
          this.setState({
            data: locationIQResponse.data[0],
            lat: locationIQResponse.data[0].lat,
            lon: locationIQResponse.data[0].lon,
          });
          axios
            .get(
              `${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`
            )
            .then((weatherResponse) => {
              console.log('Weather response', weatherResponse);
              this.setState({
                weatherData: weatherResponse.data,
                // display: true,
                alert: false,
              });
              axios
                .get(
                  `${process.env.REACT_APP_URL}/movies?query=${this.state.location}`
                )
                .then((movieResponse) => {
                  console.log('Movies response:', movieResponse);
                  this.setState({
                    moviesData: movieResponse.data,
                    display: true,
                    alert: false,
                  });
                });
            });
        });
    } catch (error) {
      this.setState({
        error: true,
        alert: error.message,
      });
    }
  };

  //   getWeather = async () => {
  //     const apiData = await axios
  //       .get(
  //         `${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`
  //       )
  //       .then((weatherResponse) => {
  //         this.setState({
  //           weatherData: weatherResponse.data,
  //           display: true,
  //           alert: false,
  //         });
  //       });
  //   };
  // };

  render() {
    return (
      <main>
        <div>
          <Form
            onSubmit={this.getLocation}
            style={{ width: '50rem', margin: '0 auto' }}
          >
            <Form.Group className='mb-3' controlId='formGroupEmail'>
              <Form.Control
                onChange={this.updateLocation}
                type='text'
                placeholder='Enter a Location'
                style={{ textAlign: 'center' }}
              />
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              style={{ width: '50rem', margin: '0 auto', marginBottom: '1rem' }}
            >
              Submit
            </Button>
          </Form>
          {this.state.display && (
            <Container>
              <Card style={{ width: '50rem', margin: '0 auto', color: 'blue' }}>
                <Card.Img
                  variant='top'
                  src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=15`}
                />
                <Card.Body>
                  <Card.Title> {this.state.data.display_name}</Card.Title>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroupItem>Latitude: {this.state.data.lat}</ListGroupItem>
                  <ListGroupItem>
                    Longitude: {this.state.data.lon}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Container>
          )}
          {this.state.error && (
            <Alert variant='danger'>
              This is a {this.state.alert}, Please enter a country name
            </Alert>
          )}
          {this.state.display && (
            <Weather weatherData={this.state.weatherData} />
          )}
          {this.state.display && <Movies moviesData={this.state.moviesData} />}
        </div>
      </main>
    );
  }
}
