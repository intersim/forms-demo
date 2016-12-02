'use strict';

import { 
  ADD_LIKE, 
  ADD_FRIEND,
  GET_INITIAL_STORIES, 
  ADD_STORY 
} from './constants';

export const addLike = () => ({
  type: ADD_LIKE
});

export const getInitialStories = stories => ({
  type: GET_INITIAL_STORIES,
  stories
});

export const addStory = story => ({
  type: ADD_STORY,
  story
});

export const addStoryAsync = story =>
  dispatch => {
    Promise
      .resolve(story)
      .then(story => 
        dispatch(addStory(story)));
  };

export const addFriend = () => ({
  type: ADD_FRIEND
});