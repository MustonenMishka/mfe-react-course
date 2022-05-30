import axios, { AxiosError } from 'axios';
import { push } from 'redux-first-history';

import { globalStore } from './api';
import { setErrorAC } from './Error/actionCreators';
import { INetworkError } from './Error/types';
import { IAction } from 'redux-micro-frontend';

export const axiosInst = axios.create({
  baseURL: 'http://localhost:5000',
});

axiosInst.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const errorData: INetworkError = {
      code: error.response?.status || null,
      type: error.response?.statusText || 'Ooops! Unknown error.',
    };
    globalStore.DispatchLocalAction('API', setErrorAC(errorData));
    globalStore.DispatchGlobalAction('API', push('/error') as IAction)
    return Promise.reject(error);
  },
);
