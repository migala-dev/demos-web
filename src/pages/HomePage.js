import googlePlayBadge from 'assets/google-play-badge.png';
import appStoreBadge from 'assets/app-store-badge.svg';

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;