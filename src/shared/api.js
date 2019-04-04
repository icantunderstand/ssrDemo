import fetch from 'isomorphic-fetch';
import { UPDATE_LANGUAGE_ITEM } from './reducer/grid';

export const fetchPopularRepos = () => (dispatch) => {
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
export const fetchData = () => () => {
  fetch('/some/aa').then((data) => {
    console.log(data.json());
  });
};
