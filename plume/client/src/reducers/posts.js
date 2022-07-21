import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH } from '../constants/actionTypes';

// reducer is a function that accepts the state and action

export default (posts = [], action) => {
    switch(action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case FETCH_ALL:
        case FETCH_BY_SEARCH:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}