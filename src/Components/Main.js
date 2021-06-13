import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      location: '',
      display: false,
    };
  }

  updateLocation = (e) => {
    this.setState = {
      location: e.target.value,
    };
  };

  getLocation = async (e) => {
    e.preventDefault();
    const axiosResponse = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.location}&format=json`
    );
    this.setState = {
      data: axiosResponse.data[0],
      display: true,
    };
  };

  render() {
    return (
      <main>
        <div>
          <Form onSubmit={this.getLocation}>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
              <Form.Control
                onChange={this.updateLocation}
                type='text'
                placeholder='Enter a Location'
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
        <div>
          {this.state.display && (
            <div>
              <h3>
                {this.state.data.display_name}, {this.state.data.lon},{' '}
                {this.state.data.lat}
              </h3>
              <img
                src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=15`}
                alt=''
              />
            </div>
          )}
        </div>
      </main>
    );
  }
}
