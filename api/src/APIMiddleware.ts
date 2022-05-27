import { Dispatch, Middleware } from 'redux';

import { RootState } from './rootReducer';
import { TodosAction } from './Todos/actions';
import { TodosActionTypeEnum } from './Todos/actionTypes';
import { addTodoThunk, getTodosThunk } from './Todos/actionCreators';
import { ErrorActionTypeEnum } from './Error/actionTypes';
import { imitateErrorThunk } from './Error/actionCreators';
import { ErrorAction } from './Error/actions';

type AllActions = TodosAction | ErrorAction;

const apiMiddleware: Middleware<{}, RootState, Dispatch<AllActions>> =
  ({ dispatch, getState }) =>
  next =>
  (action: AllActions) => {
    switch (
      action.type // check for actions that trigger async thunk
    ) {
      case TodosActionTypeEnum.API_TODOS_GET:
        return getTodosThunk()(dispatch, getState);
      case TodosActionTypeEnum.API_TODO_ADD:
        return addTodoThunk(action.payload)(dispatch, getState);
      case ErrorActionTypeEnum.API_ERROR_IMITATE:
        return imitateErrorThunk()(dispatch, getState);

      default:
        // if this is not thunk-starting action, we dispatch standard action to reducer
        return next(action);
    }
  };

export default apiMiddleware;
