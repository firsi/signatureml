import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    return (
      <Html>
        <Head >
            <meta name="theme-color" content='#EC0423' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
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
        </body>
      </Html>
    )
  }
}

export default MyDocument
