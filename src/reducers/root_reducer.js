import { combineReducers } from 'redux';
import profilesReducer from './profiles_reducer';

const rootReducer = combineReducers({
  profiles: profilesReducer
});

export default rootReducer;
