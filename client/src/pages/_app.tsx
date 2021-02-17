import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/globals.css';
import { useAuthState, useAuthDispatch } from '../context/auth';

import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';

import axios from 'axios';
import { AuthProvider } from '../context/auth';
import { CartProvider } from '../context/cart';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();
	const { authenticated } = useAuthState();
	const dispatch = useAuthDispatch();

	const tryLogInOnLoad = async () => {
		try {
			const res = await axios.get('/auth/me');
			dispatch({ type: 'LOGIN', payload: res.data });
		} catch (error) {
			console.log(error.message);
		}
	};

	if (!authenticated) {
		tryLogInOnLoad();
	}

	const authRoutes = ['/login', '/register'];
	const authRoute = authRoutes.includes(pathname);
	return (
		<AuthProvider>
			<CartProvider>
				{!authRoute && <Navbar />}
				<Component {...pageProps} />
			</CartProvider>
		</AuthProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
