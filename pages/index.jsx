import Head from "next/head";
import { useRef, Fragment } from "react";

import Dropdown from "@/components/Dropdown";

const RootPage = (props) => {
  const ref = useRef(null);

  const handleClick = () => {
    // 2 times Navbar Height
    scrollTo(ref, 140);
  };

  return (
    <Fragment>
      <Head>
        <title>Solid Project 2.0</title>
        <meta property="og:title" content="Solid Project 2.0" key="title" />
      </Head>
      <main >
      <Dropdown/>
      </main>
    </Fragment>
  );
};

// LAYOUT DECLARATION

export default RootPage;
