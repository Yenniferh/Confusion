import React from 'react';
import './style.css';
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
import CommentForm from '../CommentForm/CommentForm';

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

function RenderComments({ comments }) {
  if (comments) {
    return comments.map(com => {
      return (
        <ul key={com.id} className='list-unstyled text-left'>
          <li>{com.comment}</li>
          <li className='comment-date'>
            {com.author + ', '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            }).format(new Date(Date.parse(com.date)))}
          </li>
        </ul>
      );
    });
  } else {
    return <div></div>;
  }
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
          <div className='col-12 col-md-5'>
            <h4 className='text-left'>Comments</h4>
            <RenderComments comments={comments} />
            <CommentForm />
          </div>
        </div>
      </div>
    );
  } else {
    return '';
  }
}
