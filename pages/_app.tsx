import "styles/globals.css"; // Global styles
import type { AppProps } from "next/app"; // Next App Props

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
