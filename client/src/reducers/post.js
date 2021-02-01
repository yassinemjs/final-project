import { POSTS_FAIL, GET_POSTS, REMOVE_POST } from '../actions/types';

const initialState = {
  posts: [],
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: [...state.posts, payload], loading: false };
    case POSTS_FAIL:
      return { ...state, loading: false };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.map((posts) =>
          posts.filter((post) => post._id !== payload)
        ),
      };
    default:
      return state;
  }
}
