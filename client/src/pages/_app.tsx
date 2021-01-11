import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/globals.css';

import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';

import axios from 'axios';
import { AuthProvider } from '../context/auth';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();
	const authRoutes = ['/login', '/register'];
	const authRoute = authRoutes.includes(pathname);
	return (
		<AuthProvider>
			{!authRoute && <Navbar />}
			<Component {...pageProps} />
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
