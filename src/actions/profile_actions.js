export const ADD_NAME = 'ADD_NAME';
export const ADD_BIRTHDAY = 'ADD_BIRTHDAY';
export const ADD_GENDER = 'ADD_GENDER';
export const ADD_RELATIONSHIP = 'ADD_RELATIONSHIP';

export const GO_TO_NEXT_PAGE = 'GO_TO_NEXT_PAGE';

export const addName = name => ({
  type: ADD_NAME,
  name: name
});

export const addBirthday = birthday => ({
  type: ADD_BIRTHDAY,
  birthday: birthday
});

export const addGender = gender => ({
  type: ADD_GENDER,
  gender: gender
});

export const addRelationship = relationship => ({
  type: ADD_RELATIONSHIP,
  relationship: relationship
});

// add action to keep track of current page - check this
export const goToNextPage = page => ({
  type: GO_TO_NEXT_PAGE,
  page: page
});
