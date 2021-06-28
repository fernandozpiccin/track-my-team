import React from "react";
import { TeamMember } from "../models/TeamMember";
import { MemberCardList } from "./members/member-card-list";
interface MainProps {
  members: TeamMember[];
}
export const Main: React.FC<MainProps> = (props) => {
  const hasMembers = props.members.length > 0;
  return (
    <div className="content">
      {hasMembers ? (
        <MemberCardList members={props.members}></MemberCardList>
      ) : (
        <p>No team members found</p>
      )}
    </div>
  );
};
