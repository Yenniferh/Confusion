import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
} from 'reactstrap';

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle className='card-title'>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle className='class-subtitle'>
            {item.designation}
          </CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default function Home(props) {
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.dish} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.promotion} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}
