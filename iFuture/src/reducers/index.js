import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import search from './search'
import user from './user'
import confirmationDialog from './confirmationDialog'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    search,
    user,
    confirmationDialog,

  });
