import { useState, useCallback, useEffect } from 'react';

const storageName = 'user';
const storageVisited = 'visited';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  const login = useCallback((jwtToken, checkbox) => {
    setToken(jwtToken);
    checkbox &&
      localStorage.setItem(storageName, JSON.stringify({ token: jwtToken }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(storageName);
  }, []);

  const clearVisited = useCallback(() => {
    localStorage.removeItem(storageVisited);
    setIsFirstVisit(true);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    const visited = localStorage.getItem(storageVisited);

    if (visited) {
      setIsFirstVisit(false);
    } else {
      setIsFirstVisit(true);
      setTimeout(() => {
        localStorage.setItem(storageVisited, 'true');
      }, 500);
    }

    if (data && data.token) {
      login(data.token);
    }

    setReady(true);
  }, [login]);

  return { login, logout, token, ready, isFirstVisit, clearVisited };
};
