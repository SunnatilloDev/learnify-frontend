import { useEffect, useState } from "react";

export default function Demo() {
  return (
    <div className="fixed bottom-8 left-8 z-[99]">
      <div className="flex h-10 items-center justify-center  rounded bg-primary px-3  text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
        Hali <span className={"px-1 font-bold"}>DEMO</span>damiz
      </div>
    </div>
  );
}
