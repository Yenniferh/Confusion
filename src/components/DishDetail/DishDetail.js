import React, { Component, Fragment } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
} from 'reactstrap';
import Comment from '../Comment/Comment';

export default class DishDetail extends Component {
  renderDetails(dish) {
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
    }
  }

  renderComments(dish) {
    if (dish) {
      return <Comment dishComments={dish.comments} />;
    } else {
      return '';
    }
  }

  render() {
    const dish = this.props.dish;
    if (dish) {
      return (
        <Fragment>
          <div className='container'>
            <div className='row'>
              {this.renderDetails(this.props.dish)}
              {this.renderComments(this.props.dish)}
            </div>
          </div>
        </Fragment>
      );
    } else {
      return '';
    }
  }
}
