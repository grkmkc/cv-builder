import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
const routes = [
  { path: '/', component: Home },
  { path: '/signin', component: Login, name: 'Login' },
  { path: '/signup', component: Register, name: 'Register' }
];

export default routes;
