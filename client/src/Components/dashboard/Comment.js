import React, { Fragment } from 'react';
import './Style.css';

const Comment = ({ comment }) => {
  return (
    <Fragment>
      <hr />
      <div className='comment-delete'>
        <p className='pl-3 comment'>
          <span className='name-comment'>{comment.name}</span>:
          <span className='comment-text'> {comment.text}</span>
        </p>
      </div>
    </Fragment>
  );
};

export default Comment;
