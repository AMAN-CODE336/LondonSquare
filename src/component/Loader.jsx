"use client";

import { ScaleLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <ScaleLoader color="#c26265" height={40} width={5} radius={3} margin={2} />
    </div>
  );
}
