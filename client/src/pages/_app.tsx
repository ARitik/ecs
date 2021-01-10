import App from 'next/app';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/globals.css';

import axios from 'axios';
import { AuthProvider } from '../context/auth';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
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
