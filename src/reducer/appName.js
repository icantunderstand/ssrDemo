export const UPDATE_LANGUAGE_ITEM = 'UPDATE_APP_NAME';

const initState = {
  appName: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE_ITEM: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
