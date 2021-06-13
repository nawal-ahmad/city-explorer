import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  getLocation = (e) => {
    console.log(e.target.value);
    this.setState = {
      location: e.target.value,
    };
  };

  render() {
    return (
      <main>
        <div>
          <Form onSubmit={this.getLocation}>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
              <Form.Control type='text' placeholder='Enter a Location' />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
        <div>
          <h2></h2>
        </div>
        {/* <Form onSubmit={this.getLocation}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control
              onChange={this.updateLocation}
              type='text'
              placeholder='Enter a Location'
            />
          </Form.Group>
        </Form> */}
      </main>
    );
  }
}
