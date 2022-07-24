const getMonthsAgo = updatedAt => {
  const updatedAtMonth = new Date(updatedAt).getMonth();
  const currentMonth = new Date().getMonth();

  return (currentMonth - updatedAtMonth) + 1;
};

const cleanupRepositoryData = (data = {}) => {
  if (data === null) return {};

  if (Object.entries(data).length === 0) {
    return {};
  }

  const { message } = data;
  if (message) return { message };

  const { owner, updated_at: updatedAt, html_url: htmlURL } = data;
  const { avatar_url, login } = owner;

  const monthsAgo = getMonthsAgo(updatedAt);

  return { 
    ownerAvatar: avatar_url, 
    ownerUser: login, 
    lastUpdate: monthsAgo,
    htmlURL: htmlURL
  };
};

export default cleanupRepositoryData;