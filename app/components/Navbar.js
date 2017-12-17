import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const logout = (e) => {
    e.preventDefault();
    props.logout();
  };

  const links = (
    (props.authenticated) ?
      <div>
        <div className="navbar navbar-default">
          <Link to="/" className="nav-item nav-link">Home</Link>
        </div>
        <div className="nav navbar-nav float-xs-right">
          <Link to="#" onClick={logout} className="nav-item nav-link">Logout</Link>
        </div>
      </div>
      :
      <div>
        <ul className="nav navbar-nav">
          <li><Link to="/" className="nav-item nav-link">Home</Link></li>
          <li><Link to="/signin" className="nav-item nav-link">Sign in</Link></li>
          <li><Link to="/signup" className="nav-item nav-link">Sign up</Link></li>
        </ul>
      </div>
  );

  return (
    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="row">
          <div className="col-md-12">{links}</div>
        </div>
      </div>
    </nav>
  );
};
