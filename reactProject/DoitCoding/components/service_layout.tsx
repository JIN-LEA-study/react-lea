import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ServiceLayout = function ({ title = "blah lea", children }: Props) {
  return (
    <div>
      <head>
        <title>{title}</title>
      </head>
      {children}
    </div>
  );
};

export default ServiceLayout;
