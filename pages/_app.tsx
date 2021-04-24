// import App, { AppProps, AppContext } from 'next/app'

import "@fortawesome/fontawesome-free/css/all.css";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
  CssBaseline,
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
} from "@material-ui/core";
import { CoreSpinner } from "core/CoreSpinner";
import { GlobalStyle } from "GlobalStyle";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { theme } from "theme";
import { GlobalDialog } from "views/common/GlobalDialog";
import { GlobalSpinner } from "views/common/GlobalSpinner";
import { Navbar } from "views/common/Navbar";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  // const { isReady } = useAuth();
  const isReady = true;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>NextJS Template</title>
      </Head>
      <GlobalStyle />
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <EmotionThemeProvider theme={theme}>
            {isReady ? (
              <>
                <CssBaseline />
                <GlobalSpinner />
                <GlobalDialog />
                <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar
                  pauseOnFocusLoss={false}
                />

                <Navbar>
                  <Component {...pageProps} />
                </Navbar>
              </>
            ) : (
              <CoreSpinner open />
            )}
          </EmotionThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// CustomApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default CustomApp;
