import Document, { Html, Head, Main, NextScript} from "next/document";
import { ServerStyleSheet } from "styled-components";


export default class extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const renderPage = ctx.renderPage;
    
        try {
          ctx.renderPage = () => {
            return renderPage({
              enhanceApp: (App) => {
                return (props) => {
                  return sheet.collectStyles(<App {...props} />);
                };
              },
            });
          };
    
          const initialProps = await Document.getInitialProps(ctx);
    
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          };
        } finally {
          sheet.seal();
        }
      }

    render() {
        const { styles } = this.props;
        const apiKey = process.env.GOOGLE_API_KEY;
    
        return (
          <Html lang="en">
            <Head>
              <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
              <meta name="application-name" content="App" />
              ...
              <script
                src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=&v=weekly`}
                async
              ></script>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
    }
}