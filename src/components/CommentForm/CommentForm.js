import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Label,
  Col,
} from 'reactstrap';
import { required, maxLength, minLength } from '../../redux/validators';
import { LocalForm, Control, Errors } from 'react-redux-form';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleSubmit(values) {
    console.log(`State: ${JSON.stringify(values)}`);
    alert(`State: ${JSON.stringify(values)}`);
    this.toggleModal();
  }

  render() {
    return (
      <React.Fragment>
        <Button outline color='secondary' onClick={this.toggleModal}>
          <span className='fa fa-pencil fa-lg'></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <Row className='form-group'>
                <Label htmlFor='rating' md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model='.rating'
                    name='rating'
                    className='form-control'
                    id='rating'
                  >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='name' md={12}>
                  Your name
                </Label>
                <Col md={12}>
                  <Control.text
                    model='.name'
                    name='name'
                    className='form-control'
                    id='name'
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className='text-danger'
                    model='.name'
                    show='touched'
                    messages={{
                      required: 'Required ',
                      minLength: 'Must be greater than 2 characters ',
                      maxLength: 'Must be 15 characters or less ',
                    }}
                  />
                </Col>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='comment' md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model='.comment'
                    name='comment'
                    className='form-control'
                    id='comment'
                    rows='6'
                  />
                </Col>
              </Row>
              <Row className='form-group'>
                <Col md={12}>
                  <Button
                    color='primary'
                    className='btn-block'
                    onSubmit={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
