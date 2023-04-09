import React from "react";

type Props = {
  name: string;
  background: string;
};

const Header = ({ name, background }: Props) => {
  return (
    <div
      className={`h-[90vh] overflow-hidden w-full bg-fixed bg-center bg-cover bg-no-repeat sm:mt-20 shadow-kabur ${background}`}
    >
      <div className="bg-blurr sm:max-w-fit p-6 absolute top-64 sm:top-56">
        <p className="uppercase text-lg sm:text-3xl tracking-widest text-white font-bold sm:pl-20 ">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Header;
