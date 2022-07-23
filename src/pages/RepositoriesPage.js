import RepositoryList from 'components/RepositoryList';
import RepositoryElement from 'components/RepositoryElement';
import RepositoryCard from 'components/RepositoryCard';

const RepositoriesPage = () => {
  return (
    <section className="repositories-page">
      <h1 className="repositories-page__title">Repositorios</h1>

      {/* Test list */}
      <RepositoryList listTitle="Backend">

        <RepositoryElement elementTitle="Auth Service">
          <RepositoryCard 
            repositoryData={{
              ownerAvatar: 'https://avatars.githubusercontent.com/u/47933710?v=4',
              repositoryName: 'auth-service',
              ownerUser: 'YaelBadillo',
              lastUpdate: '5'
            }} 
          />
        </RepositoryElement>

      </RepositoryList> 
    </section>
  );
};

export default RepositoriesPage;