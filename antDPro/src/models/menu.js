import { getMenu } from '../services/menu';

export default {
  namespace: 'menu',
  state: {
    menu: [],
    menuData: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getMenu);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
  reducers: {
    save(state, action) {
      const tempMenu = action.payload || [];
      const tempData = tempMenu.topMenu.map(item => ({
        name: item.title,
        icon: 'dashboard',
        path: item.url,
        children: item.children.map(item => ({ name: item.title, path: item.url })),
      }));
      console.log('test2:', tempData);

      return {
        ...state,
        menu: action.payload || [],
        menuData: tempData,
      };
    },
  },
};
