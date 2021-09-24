import {ADD_EDU, ADD_PER, ADD_PHOTO, ADD_PRO} from '../constants';


const initialState = {
  personalInfo: {},
  professionalInfo: {},
  educationalInfo: {},
  photoUrl: '',
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PER:
      return {
        ...state,
        personalInfo: action.payload,
      };

    case ADD_PRO:
      return {
        ...state,
        professionalInfo: action.payload,
      };

    case ADD_EDU:
      return {
        ...state,
        educationalInfo: action.payload,
      };

    case ADD_PHOTO:
      return {
        ...state,
        photoUrl: action.payload,
      };
      
    default:
      return state;
  }
};
export default infoReducer;
