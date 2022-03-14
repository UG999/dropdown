import { Fragment } from "react";

// import { Provider } from "next-auth/client";

import '../styles/globals.css'




const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  return (
    // <Provider session={session}>

          <Layout>
            <Component {...pageProps} />
          </Layout>



    // </Provider>
  );
};

export default App;
