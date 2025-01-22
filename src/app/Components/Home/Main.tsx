"use client";
import React from "react";
import { Vortex } from "../ui/vortex";

import MainTypewriter from "./MainTypewriter";

export default function VortexDemo() {
  return (
    
      <div className="w-[calc(100%)] mx-auto rounded-md  h-[30rem] overflow-hidden bg-zinc-900 dark:bg-black">
        <Vortex 
          className="font-nasalization flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <MainTypewriter />
        </Vortex>
      </div>
    
  );
}
