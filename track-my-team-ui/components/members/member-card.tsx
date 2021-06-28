import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import { TeamMember } from "../../models/TeamMember";
export interface MemberCardProps {
  member: TeamMember;
  displayIndex: number;
}
export const MemberCard: React.FC<MemberCardProps> = (props) => {
  let categoryDescription: JSX.Element = <p>Information not available</p>;
  switch (props.member.category.toLowerCase()) {
    case "still-in":
      categoryDescription = <FontAwesomeIcon icon={faSmile} />;
      break;
    case "notice":
      categoryDescription = <p>Notice period</p>;
      break;
    case "left":
      categoryDescription = <p>Moved on to pastures new </p>;
      break;
  }

  const [flipClass, setFlipClass] = useState<string>("");

  return (
    <div className="flip-card">
      <div
        className={"flip-card-inner " + flipClass}
        onClick={() => {
          const newStatus = flipClass === "" ? "flip" : "";
          setFlipClass(newStatus);
        }}
      >
        <div className="flip-card-front">
          <div
            className="circle"
            style={{
              backgroundColor: `rgb(${30 + props.displayIndex * 1},80,${
                props.displayIndex * 15
              }, 0.5)`,
            }}
          >
            <span>{props.member.initials}</span>
          </div>
        </div>
        <div className={"flip-card-back " + props.member.category}>
          <h2>{props.member.jobTitle}</h2>
          {categoryDescription}
        </div>
      </div>
    </div>
  );
};
