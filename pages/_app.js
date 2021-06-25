import MainLayout from '../layouts/MainLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout className='font-custom'>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
