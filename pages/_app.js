import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { GoogleFonts } from "next-google-fonts";
import Head from "next/head";
import { useStore } from "../configs/redux"
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>

      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" />
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"

        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Provider>

  )
}

export default MyApp
