// @flow
import { combineReducers } from 'redux';
import NavigationStateReducer from './navigation';
import CalendarReducer from './calendar';
import GridReducer from './grid';
import ChartsReducer from './charts';
// ## Generator Reducer Imports
import ChatReducer from './chat';
import GalleryReducer from './gallery';
import AuthReducer from './auth';

export default combineReducers({
  navigation: NavigationStateReducer,
  calendar: CalendarReducer,
  grid: GridReducer,
  charts: ChartsReducer,
  // ## Generator Reducers

  chat: ChatReducer,

  gallery: GalleryReducer,

  auth: AuthReducer,
});
