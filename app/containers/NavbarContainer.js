import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';

import { signOut } from '../actions';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout() {
    dispatch(signOut());
    ownProps.history.push('/');
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
