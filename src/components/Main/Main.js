import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import DishDetail from '../DishDetail/DishDetail';
import { DISHES } from '../../shared/dishes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onSelectedDish(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onSelectedDish(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish,
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
