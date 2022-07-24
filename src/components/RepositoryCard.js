import PropTypes from 'prop-types';

import githubMark from 'assets/GitHub-Mark-32px.png';

const RepositoryCard = ({ repositoryData }) => {
  const { ownerAvatar, repositoryName, ownerUser, lastUpdate } = repositoryData;

  return (
    <a
      href="https://google.com"
      rel="noreferrer"
      target="_blank"
      className="repository-card"
    >
      <article className="repository-card__wrapper">
        <div className="repository-card__owner-avatar-wrapper">
          <div className="repository-card__owner-avatar-img-wrapper">
            <img
              src={ownerAvatar}
              alt="Owner"
              className="repository-card__owner-avatar"
            />
          </div>

          <div className="repository-card__github-mark-img-wrapper">
            <img
              src={githubMark}
              alt="Github"
              className="repository-card__github-mark"
            />
          </div>
        </div>

        <div className="repository-card__repository-info">
          <span className="repository-card__repository-name">
            {repositoryName}
          </span>
          <div className="repository-card__repository-info-wrapper">
            <span className="repository-card__owner-user">{ownerUser}</span>
            <span className="repository-card__bullet">•</span>
            <span className="repository-card__last-update">
              {`Updated at ${lastUpdate} months ago`}
            </span>
          </div>
        </div>
      </article>
    </a>
  );
};

RepositoryCard.propTypes = {
  repositoryData: PropTypes.exact({
    ownerAvatar: PropTypes.string.isRequired,
    repositoryName: PropTypes.string.isRequired,
    ownerUser: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
  }).isRequired,
};

export default RepositoryCard;
