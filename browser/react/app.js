'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import NewsFeedContainer from './NewsFeedContainer';
import FriendsContainer from './FriendsContainer';
import Sidebar from './Sidebar';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { getInitialStories } from './action-creators';

const onNewsFeedEnter = () => {
  return store.dispatch(getInitialStories([
    {
      id: 999,
      title: "Here's one trick doctors DON'T want you to know!"
    }
  ]));
};

{/** Refactor this from the original ReactDOM.render route */}
const AppRoot = ({ children }) => (
  <div className="container">
    <div className="row">
      <Sidebar />
      <div className="col-md-9">
        { children }
      </div>
    </div>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppRoot}>
        {/** Do this without the IndexRoute first */}
        <IndexRoute component={FriendsContainer} />
        <Route path="/friends" component={FriendsContainer} />
        <Route path="/news-feed" component={NewsFeedContainer} onEnter={onNewsFeedEnter} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app')
);