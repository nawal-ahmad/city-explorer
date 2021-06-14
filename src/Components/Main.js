import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    console.log(e.target.value);
    this.setState({
      location: e.target.value,
    });
  };

  getLocation = async (e) => {
    console.log('Ho');
    e.preventDefault();
    const reqData = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=pk.917c9eb60dbcf09cef8b2b16db9e9931&city=${this.state.location}&format=json`
    );

    this.setState({
      data: reqData.data[0],
      display: true,
    });
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
              <div className={'map'}>
                <img
                  src={`https://maps.locationiq.com/v3/staticmap?key=pk.917c9eb60dbcf09cef8b2b16db9e9931&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=15`}
                  alt=''
                />
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }
}
