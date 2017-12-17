import React from 'react';

import SignInFormContainer from '../containers/SignInFormContainer';

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <h1>Sign in</h1>
        <hr />
        <SignInFormContainer />
      </div>
    </div>
  </div>
);
