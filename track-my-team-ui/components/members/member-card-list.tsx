import React from "react";
import { TeamMember } from "../../models/TeamMember";
import { MemberCard } from "./member-card";
export interface MemberListProps {
  members: TeamMember[];
}

export const MemberCardList: React.FC<MemberListProps> = (props) => {
  return (
    <React.Fragment>
      {props.members.map((m, i) => {
        return (
          <MemberCard key={m.initials} member={m} displayIndex={i}></MemberCard>
        );
      })}
    </React.Fragment>
  );
};
