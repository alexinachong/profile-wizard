export const INCREMENT_PAGE_NUM = 'INCREMENT_PAGE_NUM';

export const ADD_FIRST_NAME = 'ADD_FIRST_NAME';
export const ADD_LAST_NAME = 'ADD_LAST_NAME';
export const ADD_BIRTHDAY = 'ADD_BIRTHDAY';
export const ADD_GENDER = 'ADD_GENDER';
export const ADD_RELATIONSHIP = 'ADD_RELATIONSHIP';

let currentPage = 0;

export const incrementPageNum = () => ({
  type: INCREMENT_PAGE_NUM,
  pageNum: currentPage
});


export const addFirstName = firstName => ({
  type: ADD_FIRST_NAME,
  firstName: firstName
});

export const addLastName = lastName => ({
  type: ADD_LAST_NAME,
  lastName: lastName
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
