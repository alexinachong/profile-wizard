import { merge } from 'lodash';
import { INCREMENT_PAGE_NUM, ADD_NAME, ADD_BIRTHDAY, ADD_GENDER, ADD_RELATIONSHIP } from '../actions/profile_actions';

const profilesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case INCREMENT_PAGE_NUM:
      let newProfilePage = {};
      newProfilePage[action.pageNum] = {pageNum: action.pageNum};
      return merge({}, state, newProfilePage);

    default:
      return state;
  }
};

export default profilesReducer;
