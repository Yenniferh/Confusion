import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import DishDetail from '../DishDetail/DishDetail';
import { DISHES } from '../../shared/dishes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/menu'
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

/* <Menu
  dishes={this.state.dishes}
  onClick={dishId => this.onSelectedDish(dishId)}
/>
<DishDetail
  dish={
    this.state.dishes.filter(
      dish => dish.id === this.state.selectedDish,
    )[0]
  }
/> */
