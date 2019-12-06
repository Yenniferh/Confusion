import React, { Component } from 'react';
import './style.css';

export default class Comment extends Component {
  render() {
    const comments = this.props.dishComments;
    if (comments) {
      const renderComments = comments.map(com => {
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

      return (
        <div className='col-12 col-md-5'>
          <h4 className='text-left'>Comments</h4>
          {renderComments}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
