import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const LogoCloud = () => {
  return (
    <div className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
        Providing services under NDIS, Medicare and most private health funds
      </p>
      <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <StaticImage className="h-12" src="../images/medicare.png" alt="Medicare>" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <StaticImage className="h-12" src="../images/ndis.png" alt="NDIS" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <StaticImage className="h-12" src="../images/medibank.png" alt="Medibank" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
          <StaticImage className="h-12" src="../images/nib.png" alt="NIB" />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
          <StaticImage className="h-12" src="../images/hbf.png" alt="HBF" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default LogoCloud;
