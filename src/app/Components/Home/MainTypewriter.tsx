"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useRouter } from "next/navigation";
export default function TypewriterEffectSmoothDemo() {
    const router = useRouter()
  const handleRegisterClick = () => {
    router.push("/event-timeline"); // Navigate to /event-timeline page
  };
  const words = [
    {
      text: "Create.",
    },
    {
      text: "Connect.",
    },
    {
      text: "Collaborate.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
    <h1 className="border-2 px-5 py-1 mb-12 rounded-full text-white">2K24</h1>
      <h1 className="font-josefin text-white text-5xl md:text-8xl font-bold text-center">
        CONVERGENCE
      </h1>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button onClick={handleRegisterClick} className="font-nasalization px-4 py-2 border-2 border-orange-600 rounded-full hover:bg-orange-700 transition duration-200 rounded-full text-white ">
          REGISTER
        </button>
      </div>
    </div>
  );
}
