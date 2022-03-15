import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
