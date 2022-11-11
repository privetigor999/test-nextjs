import React from "react";
import Head from "next/head";
import A from "./A";
const Maincontainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"next js, igor" + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователи" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: #d2d2d2;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default Maincontainer;
