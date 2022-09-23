import { FC, useState, useEffect } from "react";
import { useAptos } from "../../hooks";

export const HomeView: FC = ({}) => {
  const [aptos, setAptos] = useState(false);

  useEffect(() => {
    const win = window as any;
    if (typeof win.aptos !== "undefined") {
      setAptos(win.aptos);
    }
  }, []);
  const onButtonClick = () => {
    console.log("apt", aptos);
    // console.log("aptos", aptos);
  };
  return (
    <div className="hero mx-auto p-4 min-h-16 py-4">
      <div className="hero-content flex flex-col max-w-lg">
        Connect your wallet to continue
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Connect
        </button>
      </div>
    </div>
  );
};
