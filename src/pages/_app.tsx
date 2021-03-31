import { AppMetaTags } from '../components/MetaTags/AppMetaTags';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppMetaTags />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
