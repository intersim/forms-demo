'use strict';

import { connect } from 'react-redux';
import Friends from './Friends';
import { addFriend } from './action-creators';

export default connect(
  ({ friends }) => ({ friends }),
  dispatch => ({ 
    addFriend: () => dispatch(addFriend()) 
  })
)(Friends);