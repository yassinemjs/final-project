import { POSTS_FAIL, POSTS_SUCCES, LIKE_POST,ADD_COMMENT,REMOVE_COMMENT,ADD_POST,REMOVE_POST } from '../action/Type'

const initailState = {
    posts: [],
    userPost: [],
    loading: true,
}


const reducer = (state = initailState, action) => {

    const { payload } = action


    switch (action.type) {
        case POSTS_SUCCES:
            return { ...state, posts: [...state.posts, payload], loading: false }
        case POSTS_FAIL:
            return { ...state, loadin: false }
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.map(post => post._id === payload.id ? { ...post, like: payload.likes } : post))
               
            }

        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => post.map(post => post._id === payload.id ? { ...post, comment: payload.comment } : post))
                
            }
         case REMOVE_COMMENT:
             return {...state,
                 posts:state.posts.map(post=>post.map(post=>post._id===payload.idPost?{...post,comment:post.comment.filter(comment=>comment._id.toString()!==payload.idComment)}:post))
                } 
          case ADD_POST:
              return {...state,posts:state.posts.map(post=>[payload,...post])} 
          case REMOVE_POST:
              return {...state,posts:state.posts.map(posts=>posts.filter(post=>post._id!==payload))}           
        default:
            return state
    }
}



export default reducer