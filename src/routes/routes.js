import Register from '../components/pages/Register';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import Report from '../components/pages/Report';
import Result from '../components/pages/Result';

// Este es un arreglo donde irán todas las rutas de nuestra App ;)
const ROUTES = [
	{
		path: '/register', // could be an array or an string
		key: 'REGISTER',
		exact: true,
		component: Register,
		auth: false,
	},
	{
		path: '/login', // could be an array or an string
		key: 'LOGIN',
		exact: true,
		component: Login,
		auth: false,
	},
	{
		path: ['/home','/'], // could be an array or an string
		key: 'HOME',
		exact: true,
		component: Home,
		auth: false,
	},
	{
		path: '/report', // could be an array or an string
		key: 'REPORT',
		exact: true,
		component: Report,
		auth: false,
	},
	{
		path: '/result', // could be an array or an string
		key: 'RESULT',
		exact: true,
		component: Result,
		auth: false,
	},
];

export default ROUTES;
