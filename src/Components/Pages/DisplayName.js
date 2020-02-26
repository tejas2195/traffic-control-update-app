import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { articles: state.articles };
}

const ConnectedList = ({ articles }) => (
    articles.map(el => (
      <div>Welcome {el.name}</div>
    ))
  );
  
  const DisplayName = connect(mapStateToProps)(ConnectedList);
  
  export default DisplayName;