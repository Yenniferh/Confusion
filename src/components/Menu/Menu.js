import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import './style.css';

export default class Menu extends Component {
  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className='col-12 col-md-5 m-2'>
          <Card className='dish' onClick={() => this.props.onClick(dish.id)}>
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
      </div>
    );
  }
}
