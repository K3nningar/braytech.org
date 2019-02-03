import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const CharacterRoute = ({ render, component, children, profile, ...rest }) => {
  if (!profile.data || !profile.characterId) {
    return (
      <Route
        {...rest}
        render={route => (
          <Redirect
            to={{
              pathname: '/character-select',
              state: { from: route.location }
            }}
          />
        )}
      />
    );
  }

  return <Route {...rest} render={render} component={component} children={children} />;
};

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(CharacterRoute);
