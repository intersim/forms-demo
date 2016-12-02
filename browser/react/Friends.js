'use strict';

import React from 'react';

export default ({ friends, addFriend }) => (
  <div>
    <h4>Friends</h4>
    <p>You have { friends } friends</p>
    <button className="btn btn-default" onClick={addFriend}>Add Friend</button>
  </div>
);