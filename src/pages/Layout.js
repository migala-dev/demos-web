import PropTypes from 'prop-types';

import logo from 'assets/demos-logo.png';
import personWithPhone1 from 'assets/person-with-phone-1.png';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="content-container">
        <img className="logo" src={logo} alt="logo"></img>

        { children }

      </div>

      <img
        className="person-with-phone"
        src={personWithPhone1}
        alt="person-with-phone"
      ></img>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;