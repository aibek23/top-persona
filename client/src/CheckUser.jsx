import React from 'react';
import { useAuth } from './hooks/auth.hook';
import Vacancies from './pages/Vacancies';
import Questionnaire from "./components/questionnaire/Questionnaire";

const CheckUser = () => {
  const { isFirstVisit, ready } = useAuth();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isFirstVisit ? <Questionnaire/> : <Vacancies/>}
    </div>
  );
};

export default CheckUser;