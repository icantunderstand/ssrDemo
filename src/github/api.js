
import { UPDATE_LANGUAGE_ITEM } from './reducer/grid';

export default () => (dispatch) => {
  const items = [
    { name: 'sss', owner: 'sss' },
    { name: 'aaa', owner: 'aaa' },
    { name: 'bbb', owner: 'bbb' },
    { name: 'xxx', owner: 'xxx' },
  ];
  dispatch({
    type: UPDATE_LANGUAGE_ITEM,
    payload: {
      items,
    },
  });
  return Promise.resolve();
};
