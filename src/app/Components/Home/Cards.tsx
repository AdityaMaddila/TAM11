"use client";

import Carousel from "@/app/Components/ui/Carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Podcasts",
      button: "More Info",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "TalkShows",
      button: "More Info",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Quizzes",
      button: "More Info",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Workshops",
      button: "More Info",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-yellow-50 to-yellow-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>EVENTS</h1>

      <Carousel slides={slideData} />
     
    </div>
  );
}
