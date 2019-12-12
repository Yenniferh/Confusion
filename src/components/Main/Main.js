import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import DishDetail from '../DishDetail/DishDetail';
import Contact from '../Contact/Contact';
import { DISHES } from '../../shared/dishes';
import { LEADERS } from '../../shared/leaders';
import { PROMOTIONS } from '../../shared/promotions';
import { COMMENTS } from '../../shared/comments';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(prom => prom.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10),
            )[0]
          }
          comments={this.state.comments.filter(
            com => com.dishId === parseInt(match.params.dishId, 10),
          )}
        />
      );
    };

    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/menu'
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path='/contactus' component={Contact} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
