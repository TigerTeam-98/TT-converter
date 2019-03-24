import React from "react";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      {props.children}
    </div>
  );
};
