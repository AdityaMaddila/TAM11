"use client"
import { AnimatedTestimonials } from "@/app/Components/ui/animated-testimonials";
import { Spotlight } from "../ui/Spotlight";
import {motion} from "framer-motion"

export default function AnimatedTestimonialsDemo() {
  const Executives = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.ibb.co/D1qPjpx/Monish-TAM.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.ibb.co/GJxZPqv/Sipra-TAM.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.ibb.co/YXS2Y57/Hrishi-TAM.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.ibb.co/kmsCf2C/Sravan-TAM.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.ibb.co/wKhNKqP/Richitha-TAM.webp",
    },
  ];
  const Events = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.ibb.co/BGdv2T1/Pavithra-TAM.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.ibb.co/ZdmwpJ8/Nikita-TAM.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.ibb.co/GVntFr4/Vaishnavi-TAM.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.ibb.co/0jzCdbZ/Aabhash-TAM.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.ibb.co/sJkxDyr/Darshini-TAM.webp",
    },
  ];
  const Technical = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.ibb.co/BGdv2T1/Pavithra-TAM.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.ibb.co/ZdmwpJ8/Nikita-TAM.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.ibb.co/GVntFr4/Vaishnavi-TAM.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.ibb.co/0jzCdbZ/Aabhash-TAM.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.ibb.co/sJkxDyr/Darshini-TAM.webp",
    },
  ];
  const Marketing = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.ibb.co/BGdv2T1/Pavithra-TAM.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.ibb.co/ZdmwpJ8/Nikita-TAM.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.ibb.co/GVntFr4/Vaishnavi-TAM.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.ibb.co/0jzCdbZ/Aabhash-TAM.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.ibb.co/sJkxDyr/Darshini-TAM.webp",
    },
  ];
  const PRSales = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.ibb.co/BGdv2T1/Pavithra-TAM.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.ibb.co/ZdmwpJ8/Nikita-TAM.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.ibb.co/GVntFr4/Vaishnavi-TAM.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.ibb.co/0jzCdbZ/Aabhash-TAM.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.ibb.co/sJkxDyr/Darshini-TAM.webp",
    },
  ];
  const StageCrew = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.ibb.co/BGdv2T1/Pavithra-TAM.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.ibb.co/ZdmwpJ8/Nikita-TAM.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.ibb.co/GVntFr4/Vaishnavi-TAM.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.ibb.co/0jzCdbZ/Aabhash-TAM.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.ibb.co/sJkxDyr/Darshini-TAM.webp",
    },
  ];
  const Media = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.ibb.co/BGdv2T1/Pavithra-TAM.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.ibb.co/ZdmwpJ8/Nikita-TAM.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.ibb.co/GVntFr4/Vaishnavi-TAM.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.ibb.co/0jzCdbZ/Aabhash-TAM.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.ibb.co/sJkxDyr/Darshini-TAM.webp",
    },
  ];
  const Theaters = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.ibb.co/BGdv2T1/Pavithra-TAM.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.ibb.co/ZdmwpJ8/Nikita-TAM.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.ibb.co/GVntFr4/Vaishnavi-TAM.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.ibb.co/0jzCdbZ/Aabhash-TAM.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.ibb.co/sJkxDyr/Darshini-TAM.webp",
    },
  ];
  return(
    <>
     
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"style={{ fontFamily: 'Nasalization, sans-serif' }}>Executives</h1>
      <AnimatedTestimonials testimonials={Executives} />;
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"style={{ fontFamily: 'Nasalization, sans-serif' }}>Events</h1>
      <AnimatedTestimonials testimonials={Events} />;
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"style={{ fontFamily: 'Nasalization, sans-serif' }}>Technical</h1>
      <AnimatedTestimonials testimonials={Technical} />;
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"style={{ fontFamily: 'Nasalization, sans-serif' }}>Marketing</h1>
      <AnimatedTestimonials testimonials={Marketing} />;
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"style={{ fontFamily: 'Nasalization, sans-serif' }}>PR & Sales</h1>
      <AnimatedTestimonials testimonials={PRSales} />;
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"style={{ fontFamily: 'Nasalization, sans-serif' }}>StageCrew</h1>
      <AnimatedTestimonials testimonials={StageCrew} />;
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"style={{ fontFamily: 'Nasalization, sans-serif' }}>Media</h1>
      <AnimatedTestimonials testimonials={Media} />;
      <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"style={{ fontFamily: 'Nasalization, sans-serif' }}>Theaters</h1>
      <AnimatedTestimonials testimonials={Theaters} />;
      
      </>
    
  ) ;
}
