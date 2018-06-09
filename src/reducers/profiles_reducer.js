import { merge } from 'lodash';
import { INCREMENT_PAGE_NUM, ADD_FIRST_NAME, ADD_LAST_NAME, ADD_BIRTHDAY, ADD_GENDER, ADD_RELATIONSHIP } from '../actions/profile_actions';

const profilesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case INCREMENT_PAGE_NUM:
      return merge({}, state, {["pageNum"]: action.pageNum});

    case ADD_FIRST_NAME:
      return merge({}, state, {["firstName"]: action.firstName});

    case ADD_LAST_NAME:
      return merge({}, state, {["lastName"]: action.lastName});

    case ADD_BIRTHDAY:
      return merge({}, state, {["birthday"]: action.birthday});

    case ADD_GENDER:
      return merge({}, state, {["gender"]: action.gender});

    case ADD_RELATIONSHIP:
      return merge({}, state, {["relationship"]: action.relationship});

    default:
      return state;
  }
};

export default profilesReducer;
