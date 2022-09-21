// Next, React
import { FC, useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { programs } from "@metaplex/js";
import { submitGoods } from "./actions";

export const SubmitView: FC = ({}) => {
  return (
    <>
      <div className="hero mx-auto h-60">
        <div className="hero-content flex flex-col max-w-lg justify-center">
          <h2 className="text-xl">AHHHH</h2>
          <div className="container mx-auto "></div>
        </div>
      </div>
    </>
  );
};
