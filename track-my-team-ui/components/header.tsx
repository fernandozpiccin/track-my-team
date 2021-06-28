import React from "react";
interface HeaderProps {}
export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="header">
      <span>Track my team</span>
    </div>
  );
};
