import { merge } from 'lodash';
import { INCREMENT_PAGE_NUM, ADD_FIRST_NAME, ADD_LAST_NAME, ADD_BIRTHDAY, ADD_GENDER, ADD_RELATIONSHIP } from '../actions/profile_actions';

const profilesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case INCREMENT_PAGE_NUM:
      let newProfilePage = {};
      newProfilePage[action.pageNum] = {pageNum: action.pageNum};
      return merge({}, state, newProfilePage);

    case ADD_FIRST_NAME:
      let newFirstName = {};
      newFirstName[action.firstName] = {firstName: action.firstName};
      return merge({}, state, newFirstName);

    case ADD_LAST_NAME:
      let newLastName = {};
      newLastName[action.lastName] = {lastName: action.lastName};
      return merge({}, state, newLastName);

    case ADD_BIRTHDAY:
      let newBirthday = {};
      newBirthday[action.birthday] = {birthday: action.birthday};
      return merge({}, state, newBirthday);

    case ADD_GENDER:
      let newGender = {};
      newGender[action.gender] = {gender: action.gender};
      return merge({}, state, newGender);

    case ADD_RELATIONSHIP:
      let newRelationship = {};
      newRelationship[action.relationship] = {gender: action.relationship};
      return merge({}, state, newRelationship);

    default:
      return state;
  }
};

export default profilesReducer;
