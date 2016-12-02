import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { AllPuppies, SinglePuppy, Toy } from './app';
import FormContainer from './forms';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AllPuppies}>
      <Route path="sayHi" component={FormContainer} />
    </ Route>
    <Route path="/puppies/:puppyName" component={SinglePuppy}>
      <Route path="toy" component={Toy} />
    </ Route>
  </ Router>,
  document.getElementById('app')
);