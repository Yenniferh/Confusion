import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';

function RenderMenuItem({ dish }) {
  return (
    <Card className='dish'>
      <Link to={`/menu/${dish.id}`}>
        <CardImg className='dish-img' src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle className='mt-2'>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

export default function Menu({ dishes }) {
  const menu = dishes.map(dish => {
    return (
      <div key={dish.id} className='col-12 col-md-5 m-2'>
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className='row'>{menu}</div>
    </div>
  );
}
