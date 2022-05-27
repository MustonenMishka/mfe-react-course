import React from 'react';
import { imitateError } from '../globalStoreUtils';

const HomePage: React.FC = () => {
  const handleImitateError = () => {
    imitateError();
  };

  return (
    <>
      <todo-list />
      <add-todo />
      <button onClick={handleImitateError}>Imitate Error</button>
    </>
  );
};

export default HomePage;
