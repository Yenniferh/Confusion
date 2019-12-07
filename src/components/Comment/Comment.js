import React from 'react';
import './style.css';

function RenderComments({ dishComments }) {
  return dishComments.map(com => {
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
}

export default function Comment({ dishComments }) {
  if (dishComments) {
    return (
      <div className='col-12 col-md-5'>
        <h4 className='text-left'>Comments</h4>
        <RenderComments dishComments={dishComments} />
      </div>
    );
  } else {
    return <div></div>;
  }
}
