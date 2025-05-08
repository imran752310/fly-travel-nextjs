import React from "react";
type Props = {
  heading: string;
};

const SectonHeading = ({ heading }: Props) => {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">
          {heading}
        </h1>
        <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default SectonHeading;
