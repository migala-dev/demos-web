import RepositoryList from 'components/RepositoryList';
import RepositoryElement from 'components/RepositoryElement';
import RepositoryCard from 'components/RepositoryCard';

const RepositoriesPage = () => {
  return (
    <section className="repositories-page">
      <h1 className="repositories-page__title">Repositorios</h1>

      {/* Test list */}
      <RepositoryList listTitle="Backend">

        <RepositoryElement elementTitle="Space Service">
          <RepositoryCard 
            repositoryURL="https://api.github.com/repos/AlexOrtegaZ/demos-space-service"
          />
        </RepositoryElement>

      </RepositoryList> 
    </section>
  );
};

export default RepositoriesPage;