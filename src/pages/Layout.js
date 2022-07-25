import PropTypes from "prop-types";

import { useLocation, useNavigate } from "react-router-dom";

import personWithPhone1 from "assets/person-with-phone-1.png";

import backgroundImage from "assets/paint-2.jpeg";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const isInHome = pathname === "/";

  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="content-container">
        {!isInHome && (
          <div>
            <span onClick={handleBack} className="back-link">
              Ir a página de inicio
            </span>
          </div>
        )}
        {children}
      </div>

     {isInHome && <img
        className="person-with-phone"
        src={personWithPhone1}
        alt="person-with-phone"
      ></img>}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
