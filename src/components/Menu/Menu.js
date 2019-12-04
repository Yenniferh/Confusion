import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import DishDetail from '../DishDetail/DishDetail';
import Comment from '../Comment/Comment';
import './style.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishSelected: null,
    };
  }

  onDishSelected(dish) {
    this.setState({ dishSelected: dish });
  }

  renderDish(dish) {
    return <DishDetail dish={dish} />;
  }

  renderComments(dish) {
    if (dish) {
      return <Comment dishComments={dish.comments} />;
    } else {
      return '';
    }
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className='col-12 col-md-5 m-2'>
          <Card className='dish' onClick={() => this.onDishSelected(dish)}>
            <CardImg className='dish-img' src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle className='mt-2'>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='row'>{menu}</div>
        <div className='row'>
          {this.renderDish(this.state.dishSelected)}
          {this.renderComments(this.state.dishSelected)}
        </div>
      </div>
    );
  }
}
