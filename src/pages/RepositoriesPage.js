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
              ownerAvatar: 'https://avatars.githubusercontent.com/u/27720520?v=4',
              repositoryName: 'auth-service',
              ownerUser: 'AlexOrtegaZ',
              lastUpdate: '5'
            }} 
          />
        </RepositoryElement>

        <RepositoryElement elementTitle="Space Service">
          <RepositoryCard 
            repositoryData={{
              ownerAvatar: 'https://avatars.githubusercontent.com/u/27720520?v=4',
              repositoryName: 'space-service',
              ownerUser: 'AlexOrtegaZ',
              lastUpdate: '2'
            }} 
          />
        </RepositoryElement>   

        <RepositoryElement elementTitle="Space Service">
          <RepositoryCard 
            repositoryData={{
              ownerAvatar: 'https://avatars.githubusercontent.com/u/27720520?v=4',
              repositoryName: 'space-service',
              ownerUser: 'AlexOrtegaZ',
              lastUpdate: '2'
            }} 
          />
        </RepositoryElement>
      
        <RepositoryElement elementTitle="Space Service">
          <RepositoryCard 
            repositoryData={{
              ownerAvatar: 'https://avatars.githubusercontent.com/u/27720520?v=4',
              repositoryName: 'space-service',
              ownerUser: 'AlexOrtegaZ',
              lastUpdate: '2'
            }} 
          />
        </RepositoryElement>

      </RepositoryList> 
    </section>
  );
};

export default RepositoriesPage;