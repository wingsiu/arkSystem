import { query as queryUsers, queryCurrent } from '../services/menu';

export default {
  namespace: 'menu',

  state: {
    list: [],
    currentMenu: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      console.log('test1');
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      console.log('test2');
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentMenu',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentMenu(state, action) {
      return {
        ...state,
        currentMenu: action.payload || [],
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload,
        },
      };
    },
  },
};
