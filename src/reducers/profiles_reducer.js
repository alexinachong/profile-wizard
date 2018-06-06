import { merge } from 'lodash';
import { ADD_NAME, ADD_BIRTHDAY, ADD_GENDER, ADD_RELATIONSHIP } from '../actions/profile_actions';

const profilesReducer = (state = {}, action) => {
  Object.freeze(state);
  
};

export default profilesReducer;
