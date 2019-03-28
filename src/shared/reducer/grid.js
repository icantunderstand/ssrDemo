export const UPDATE_LANGUAGE_ITEM = 'UPDATE_LANGUAGE_ITEM';

const initState = {
  items: [],
}

export default (state = initState, action) => {
  switch(action.type) {
    case UPDATE_LANGUAGE_ITEM: {
      return { ...state, ...action.payload }
    }
    default: {
      return state;
    }
  }
}