import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component, history, dispatch, ...rest }) => {
  const tokenExists = window.localStorage.getItem('userJwtToken');
  const Component = component;
  if(!tokenExists) {
    history.push('/');
    dispatch({ type: 'NOT_LOADING', path: rest.path });
    return false;
  }
  return (
    <Component history={history} />
  );
}

export default connect()(withRouter(ProtectedRoute));
