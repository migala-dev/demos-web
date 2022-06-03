import "./App.scss";
import logo from "./assets/demos-logo.png";
import googlePlayBadge from "./assets/google-play-badge.png";
import appStoreBadge from "./assets/app-store-badge.svg";
import personWithPhone1 from "./assets/person-with-phone-1.png";

function App() {
  return (
    <div className="app-container">
      <div className="content-container">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="stores-badges">
          <img className="badge" src={googlePlayBadge} alt="google-play"></img>
          <img className="badge" src={appStoreBadge} alt="app-store"></img>
        </div>
        <div className="actions-container">
          <div className="action-container">
            <label>Conoce nuestras:</label>
            <div className="button primary">Politicas de privacidad</div>
          </div>
          <div className="action-container">
            <label>Nuestro es codigo libre, encuentralo en:</label>
            <div className="button primary">Repositorios</div>
          </div>
        </div>
        <div className="actions-container">
          <div className="action-container">
            <label>Alguna:</label>
            <div className="button primary">Queja y/o sugerencias</div>
          </div>
          <div className="action-container">
            <label>Encuentranos en:</label>
            <div className="button primary">Redes sociales</div>
          </div> 
        </div>
      </div>
      <img
        className="person-with-phone"
        src={personWithPhone1}
        alt="person-with-phone"
      ></img>
    </div>
  );
}

export default App;
