import { User } from '../models/user';
import * as user from '../actions';
import * as fromRoot from '../../reducers';

/*
  STATE INTERFACE
*/

/*
  users: {
    list: {
      users: [{ username: "pedro" }, {"username", "jorge"}]
    },
    detail: {
      selectedUser: { username: "pedro" }
    }
  },
*/

export interface UsersList {
  users: Array<User>;
}

export interface UserDetail {
  selectedUser: User;
}

export interface UsersState {
  list: UsersList;
  detail: UserDetail;
}

export interface State extends fromRoot.State {
  users: UsersState;
}

/*
  STATE REDUCERS
*/

const DEFAULT_STATE = {
  LIST: {
    users: []
  },
  DETAIL: {
    selectedUser: new User()
  }
};

export function listReducer(state = DEFAULT_STATE.LIST, { type, payload }): UsersList {
  switch (type) {

    case user.LOAD_USERS_SUCCESS:
    return { ...state, users: payload };
    default:
      return state;
  }
}

export function detailReducer(state = DEFAULT_STATE.DETAIL, { type, payload }): UserDetail {

  switch (type) {
    default:
      return state;
  }
}

export const reducers = {
    list: listReducer,
    detail: detailReducer
};

/*
  STATE SELECTORS
*/

export const getAllUsers = (appState) => appState.users.list.users;
export const getSelectedUser = (appState) => appState.users.detail.selectedUser;