import { Link } from "react-router-dom";

import googlePlayBadge from "assets/google-play-badge.png";
import appStoreBadge from "assets/app-store-badge.svg";
import logo from "assets/demos-logo.png";

const HomePage = () => {
  return (
    <>
      <img className="logo" src={logo} alt="logo"></img>
      <div className="stores-badges">
        <img className="badge" src={googlePlayBadge} alt="google-play"></img>
        <img className="badge" src={appStoreBadge} alt="app-store"></img>
      </div>

      <div className="actions-container">
        <div className="action-container">
          <label>Conoce nuestras:</label>
          <Link to="/privacidad" className="button primary">
            Politicas de privacidad
          </Link>
        </div>

        <div className="action-container">
          <label>Nuestro es codigo libre, encuentralo en:</label>
          <Link to="/repositorios" className="button primary">
            Repositorios
          </Link>
        </div>
      </div>

      <div className="actions-container">
        <div className="action-container">
          <label>Alguna:</label>
          <Link to="/comentarios" className="button primary">
            Queja y/o sugerencias
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
