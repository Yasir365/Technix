import '@/src/styles/index.scss'
import Header from '../layout/headers/header';
import Footer from '../layout/footers/footer';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
