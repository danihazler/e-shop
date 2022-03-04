import { Layout } from "components/layout";
import { CartProvider } from "context/CartContext";
import "assets/styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default App;
