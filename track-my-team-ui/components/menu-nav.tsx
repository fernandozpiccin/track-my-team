import React from "react";
import Link from "next/link";
interface MenuNavProps {
  appName: string;
}
export const MenuNav: React.FC<MenuNavProps> = (props) => {
  return (
    <div className="header">
      <Link href="/">
        <a>
          <span>{props.appName}</span>
        </a>
      </Link>
    </div>
  );
};
