import { useQuery } from 'react-query';

const getRepositoryByUsername = async ({ username, itemsPerPage, selectedPage }) => {
  if (!username || !itemsPerPage || !selectedPage) {
    return null;
  }

  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=${itemsPerPage}&page=${selectedPage}`);
  const data = await res.json();

  return {
      repositories: data,
      notFound: data.message === 'Not Found',
  };
};

export default function useRepository(username, itemsPerPage, selectedPage) {
  return useQuery(
    ['repository.getByUsername', username, itemsPerPage, selectedPage],
    () => getRepositoryByUsername({ username, itemsPerPage, selectedPage }),
  );
}