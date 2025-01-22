"use client";

import { cn } from "@/app/lib/utils";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    quote: string;
    name: string;
    backgroundImage?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };

  const router = useRouter(); // Initialize the router

  const handleRegisterClick = () => {
    router.push('/event-timeline'); // Navigate to the events page
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-700 px-8 md:w-[450px]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.backgroundImage})`, // Dynamically set the background image
              backgroundSize: "cover", // Ensure the image covers the card
              backgroundPosition: "center", // Center the background image
            }}
            key={item.name}
          >
            <blockquote>
              <span className="relative z-20 text-3xl leading-[1.6] text-white dark:text-white font-normal">
                {item.title}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-l leading-[1.6] text-white dark:text-white font-normal">
                    {item.name}
                  </span>
                  <span className="text-l leading-[1.6] text-white dark:text-white font-normal">
                    {item.quote}
                  </span>
                </span>
              </div>
              <button onClick={handleRegisterClick} className="mt-5 mb-5 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700">
                Explore More
              </button>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
