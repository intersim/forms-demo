'use strict';

import { 
  ADD_LIKE, 
  ADD_FRIEND,
  GET_INITIAL_STORIES, 
  ADD_STORY 
} from './constants';
import { combineReducers } from 'redux';

const likes = (state = 0, action) => {
  switch (action.type) {
    case ADD_LIKE: return ++state;
    default: return state;
  }
};

const initialStories = [];
const newsFeed = (state = initialStories, action) => {
  switch (action.type) {
    case GET_INITIAL_STORIES: return action.stories;
    case ADD_STORY: return [...state, action.story];
    default: return state;
  }
};

const friends = (state = 0, action) => {
  switch (action.type) {
    case ADD_FRIEND: return ++state;
    default: return state;
  }
};

export default combineReducers({
  likes,
  newsFeed,
  friends
});
