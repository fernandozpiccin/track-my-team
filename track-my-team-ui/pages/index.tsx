import React from "react";
import { TeamMember } from "../models/TeamMember";
import { MemberCardList } from "../components/members/member-card-list";
import { Header } from "../components/header";
import Head from "next/head";
import { Footer } from "../components/footer";
export async function getStaticProps({}) {
  const url: string | undefined = process.env.MEMBERS_API;
  const membersResponse = await fetch(url || "");
  const membersData = await membersResponse.json();
  return {
    props: {
      members: membersData,
      lastUpdated: JSON.stringify(new Date())
    },
    revalidate: 60,
  };
}
interface HomeProps {
  members: TeamMember[];
  lastUpdated: string; // date has to be serialized to work with getStaticProps
}

export const Home: React.FC<HomeProps> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Track My Team</title>
        <meta property="og:title" content="Track My Team" key="title" />
      </Head>
      <div>
        <Header></Header>
        <div className="content">
          <MemberCardList members={props.members}></MemberCardList>
        </div>
        <Footer lastUpdated={JSON.parse(props.lastUpdated)}></Footer>
      </div>
    </React.Fragment>
  );
};
export default Home;
