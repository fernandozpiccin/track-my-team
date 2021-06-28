import React, { useState } from "react";
import Moment from "react-moment";
export interface FooterProps {
  lastUpdated: Date;
}
export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <React.Fragment>
      <div className="footer">
        <p className="last-updated">
          Last update: <Moment fromNow>{props.lastUpdated}</Moment>
        </p>
        <p className="copyrights">
          {" "}
          Track My Team © {new Date().getUTCFullYear()}
        </p>
      </div>
    </React.Fragment>
  );
};
