import Head from "next/head";
import React from "react";

export interface HeaderProps {
  title: string;
}
export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} key="title" />
    </Head>
  );
};
