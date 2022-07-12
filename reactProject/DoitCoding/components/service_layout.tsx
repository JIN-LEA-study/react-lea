import React from "react";

interface Props {
  title: string;
  childrean: React.ReactNode;
}

const ServiceLayout = function ({ title = "blah lea", childrean }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {childrean}
    </div>
  );
};

export default ServiceLayout;
