import { FC } from "react";

export const HomeView: FC = ({}) => {
  return (
    <div className="hero mx-auto p-4 min-h-16 py-4">
      <div className="hero-content flex flex-col max-w-lg">
        Welcome to the internet. Would you like to scream into the void?
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Scream
        </button>
      </div>
    </div>
  );
};
