import React from 'react';
import { IApiState, INetworkError } from '../types';
import { Link } from 'react-router-dom';
import { globalStore } from '../globalStoreUtils';

const ErrorPage: React.FC = () => {
  const { code, type }: INetworkError = (globalStore.GetPartnerState('API') as IApiState).Error;

  return (
    <div className="ErrorPageWrapper">
      <h1 className="ErrorCode">{code}</h1>
      <h2 className="ErrorType">{type}</h2>
      <Link to={'/'}>Back to home page</Link>
    </div>
  );
};

export default ErrorPage;
