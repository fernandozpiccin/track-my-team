import React from "react";
import Link from "next/link";
interface MenuNavProps {}
export const MenuNav: React.FC<MenuNavProps> = (props) => {
  return (
    <div className="header">
      <Link href="/">
        <a>
          <span>Track my team</span>
        </a>
      </Link>
    </div>
  );
};
