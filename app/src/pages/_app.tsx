import { AppProps } from "next/app";
import { FC } from "react";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
