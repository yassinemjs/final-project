import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../actions/post';
import Comment from './Comment';
import './Style.css';

export const Post = ({ posts }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const postDelete = () => {
    dispatch(deletePost(posts._id));
  };

  return (
    <div className='card gedf-card'>
      <div className='card-header'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='mr-2'>
              <img
                className='rounded-circle'
                width='45'
                src='https://bootdey.com/img/Content/avatar/avatar1.png'
                alt=''
              />
            </div>
            <div className='ml-2'>
              <div className='h7 text-muted'>{posts.name}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <div className='text-muted h7 mb-2'>
          {' '}
          <i className='fa fa-clock-o'></i>2020
        </div>

        <p className='card-text'>{posts.text}</p>
      </div>
      <div className='card-footer post-delete'>
        <p className='mt-3'>
          <i class='fas fa-thumbs-up' onClick=''></i>{' '}
          {posts.like.length > 0 ? `${posts.like.length} like` : 'like'}
          <i className='fa fa-comment pointer '></i>
          <span onClick={() => setShow(!show)}>
            {posts.comment.length > 0
              ? `${posts.comment.length} Comment`
              : 'comment'}
          </span>
        </p>

        <p className='mt-3' onClick={postDelete}>
          <i class='far fa-trash-alt '></i>
        </p>
      </div>
      {show && (
        <>
          {posts.comment.map((comment) => (
            <Comment comment={comment} />
          ))}
          <br />
        </>
      )}
    </div>
  );
};
