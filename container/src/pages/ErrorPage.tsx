import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IApiState, INetworkError } from '../types';
import { clearErrorState, globalStore } from '../globalStoreUtils';

const ErrorPage: React.FC = () => {
  const { code, type }: INetworkError = (globalStore.GetPartnerState('API') as IApiState).Error;

  useEffect(() => {
    return clearErrorState
  })

  return (
    <div className="ErrorPageWrapper">
      <h1 className="ErrorCode">{code}</h1>
      <h2 className="ErrorType">{type}</h2>
      <Link to={'/'}>Back to home page</Link>
    </div>
  );
};

export default ErrorPage;
