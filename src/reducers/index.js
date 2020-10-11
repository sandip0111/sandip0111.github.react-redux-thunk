import { combineReducers } from 'redux';
import PostReducers from './PostReducers';

import UserReducer from './UserReducer';

export default combineReducers({
  posts : PostReducers,
  users : UserReducer
});