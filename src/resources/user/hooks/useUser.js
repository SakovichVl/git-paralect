import { useQuery } from 'react-query';

const getUserByUsername = async (username) => {
  if (!username) {
    return null;
  }

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  return {
      user: data,
      notFound: data.message === 'Not Found',
  };
};

export default function useUser(username) {
  return useQuery(
    ['user.getByUsername', username],
    () => getUserByUsername(username),
  );
}