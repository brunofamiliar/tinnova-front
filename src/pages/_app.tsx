import { ClientProvider } from "@/context/ClientContext";
import "../../styles/global.scss";
import DefaultLayout from "../layouts/default";

export default function MyApp({ Component, pageProps }) {
  return (
    <ClientProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ClientProvider>
  );
}
