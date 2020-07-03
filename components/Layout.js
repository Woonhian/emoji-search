import Header from "./Header";
import Head from "next/head";

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>Emoji Search</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/minty/bootstrap.min.css"
      />
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
