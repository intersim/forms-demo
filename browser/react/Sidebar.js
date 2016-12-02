'use strict';

import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="col-md-3">
    <sidebar>
      <ul>
        <li><Link to="/news-feed">News Feed</Link></li>
        <li><Link to="/friends">Friends</Link></li>
      </ul>
    </sidebar>
  </div>
);