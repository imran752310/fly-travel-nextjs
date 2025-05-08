import SectonHeading from "@/components/Helper/SectonHeading";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-20 pb-20">
      <SectonHeading heading="Our Services" />
      <div className="mt-14 w-[80%] mx-auto">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
