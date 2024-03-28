// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Define your updateNumber() function in the head */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function updateNumber(number) {
                  console.log("Received number: " + number);
                  // For demonstration purposes, let's display the received number in an alert
                  alert("Received number: " + number);
                }
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
