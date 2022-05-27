import { ErrorActionTypeEnum } from './actionTypes';
import { INetworkError } from './types';

export interface IApiSetErrorAction {
  type: ErrorActionTypeEnum.API_ERROR_SET;
  payload: INetworkError;
}
export interface IApiClearErrorAction {
  type: ErrorActionTypeEnum.API_ERROR_CLEAR;
}

export interface IApiImitateErrorAction {
  type: ErrorActionTypeEnum.API_ERROR_IMITATE;
}

export type ErrorAction = IApiSetErrorAction | IApiClearErrorAction | IApiImitateErrorAction;
