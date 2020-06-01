import { Layout } from "../components/layout/Layout"
import { theme } from "../util/theme"
import { ThemeProvider } from "@material-ui/core"
import {Footer} from "../components/layout/Footer"



function MyApp({ Component, pageProps }) {
    
    return (
        <ThemeProvider theme={theme}>
            <Layout />
            <main>
                <Component {...pageProps} />
            </main>
           <Footer />
           <style jsx global>{`
                html,body{
                  overflow-x: hidden;
                  background-color: #19191a;
                  color: #fff;
                }
                body{
                    margin: 0;
                    height: 100%;
                }
                main{
                  min-height: 90vh;
                }
            `}
            </style>
        </ThemeProvider>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp;