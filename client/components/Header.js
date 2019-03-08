import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/CurrentUser";
import logout from "../mutations/Logout";

const Header = props => {
  const onLogoutClick = logout => {
    logout({
      refetchQueries: [{ query }]
    });
  };

  const renderButtons = data => {
    const { loading, user } = data;
    if (loading) return <div />;
    return user ? (
      <li>
        <a onClick={() => onLogoutClick(props.mutate)}>Logout</a>
      </li>
    ) : (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons(props.data)}</ul>
      </div>
    </nav>
  );
};

export default graphql(logout)(graphql(query)(Header));
