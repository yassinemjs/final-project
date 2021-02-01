import React, { useEffect } from 'react';
import { Post } from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../actions/post';
import { MDBAlert } from 'mdbreact';
import Alert from '../layout/Alert';
import Header from '../layout/Header';
import './Style.css';

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  if (isLoading || !posts) {
    return <MDBAlert color='primary'>....Loading</MDBAlert>;
  }

  if (!posts) {
    return 'posts not found';
  }

  return (
    <div className='container gedf-wrapper'>
      <Header title='Teachers  Posts' />
      <div className='row1'>
        <div className='col-md-6 gedf-main'>
          {posts[0].map((posts) => (
            <Post posts={posts} />
          ))}
        </div>
      </div>
      <Alert />
    </div>
  );
};

export default Posts;
