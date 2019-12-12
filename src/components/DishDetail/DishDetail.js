import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';

function RenderDetails({ dish }) {
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

export default function DishDetail({ dish, comments }) {
  if (dish) {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/menu'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <RenderDetails dish={dish} />
          <Comment dishComments={comments} />
        </div>
      </div>
    );
  } else {
    return '';
  }
}
