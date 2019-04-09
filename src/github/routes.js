import Home from './Home';
import Grid from './Grid';

const routes = [
  {
    path: '/github',
    component: Home,
    childRoutes: [
      {
        path: 'popular/:id',
        component: Grid,
      },
    ],
  },
];

export default routes;
