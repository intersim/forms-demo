'use strict';

import { connect } from 'react-redux';
import NewsFeed from './NewsFeed';
import { addLike, addStoryAsync, getInitialStories } from './action-creators';
import newsStories from './newsStories';

let idx = 0;

const mapStateToProps = ({ likes, newsFeed }) => ({
  likes,
  newsFeed
});

const mapDispatchToProps = dispatch => ({
  like: () => dispatch(addLike()),
  addStory: () => dispatch(addStoryAsync(newsStories[idx++])),
  getStories: stories => dispatch(getInitialStories(stories))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);