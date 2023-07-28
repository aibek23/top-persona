import React from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {Context} from './context/Context'
import {Loader} from './components/Loader'

function App() {
  const { token, login, logout, userId, ready, userEmail } = useAuth();
  const isAuthenticated = !token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

  return (
    <Context.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
        userEmail,
      }}
    >
     {routes} 
    </Context.Provider>
  );
}

export default App; 
