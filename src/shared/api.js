import { UPDATE_LANGUAGE_ITEM } from '../shared/reducer/grid';
import fetch from 'isomorphic-fetch'

export const fetchPopularRepos = (language = 'all') => (dispatch, getState) => {
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
    }
  })
  return Promise.resolve()
}
export const fetchData = () => (dispatch) => {
  fetch('/some/aa').then(data => {
    console.log(data.json());
  })
}