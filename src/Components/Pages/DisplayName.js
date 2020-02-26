import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { user: state.user };
}

const ConnectedList = ({ user }) => (
  user.map(el => (
      <div>Welcome {el.name}</div>
    ))
  );
  
  const DisplayName = connect(mapStateToProps)(ConnectedList);
  
  export default DisplayName;