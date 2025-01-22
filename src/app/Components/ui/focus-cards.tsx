"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

// Define the card type explicitly
type CardProps = {
  card: {
    title: string;
    src: string;
    desc: string; // Add description since it's used in your card
  };
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Card = React.memo(
  ({ card, index, hovered, setHovered }: CardProps) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-96 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"
          style={{ fontFamily: "Nasalization, sans-serif" }}
        >
          {card.title}
          <br />
          <br />
          {card.desc}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

// Use the same type for cards in FocusCards
type FocusCardsProps = {
  cards: { title: string; src: string; desc: string }[];
};

export function FocusCards({ cards }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto px-3 md:px-0">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
