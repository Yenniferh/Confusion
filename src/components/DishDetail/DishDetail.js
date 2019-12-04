import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
} from 'reactstrap';

export default class DishDetail extends Component {
  render() {
    const dish = this.props.dish;
    if (dish) {
      return (
        <div key={dish.id} className='col-12 col-md-5 m-2'>
          <Card className='dish'>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle className='mt-2'>{dish.name}</CardTitle>
              <CardSubtitle>{dish.price}</CardSubtitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return '';
    }
  }
}
