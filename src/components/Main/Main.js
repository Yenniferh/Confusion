import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import DishDetail from '../DishDetail/DishDetail';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter(dish => dish.featured)[0]}
          promotion={this.props.promotions.filter(prom => prom.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10),
            )[0]
          }
          comments={this.props.comments.filter(
            com => com.dishId === parseInt(match.params.dishId, 10),
          )}
        />
      );
    };

    const About = () => {
      return <AboutUs leaders={this.props.leaders} />;
    };

    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutus' component={About} />
          <Route
            exact
            path='/menu'
            component={() => <Menu dishes={this.props.dishes} />}
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

export default withRouter(connect(mapStateToProps)(Main));
