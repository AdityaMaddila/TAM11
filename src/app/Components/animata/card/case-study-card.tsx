import React from "react";
import { cn } from "@/app/lib/utils";

interface CaseStudyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  category?: string;
  image?: string;
  logo?: string;
  link?: string;
  type?: "content" | "simple-image";
}

// ContentCard Component for rendering text + image
const ContentCard: React.FC<CaseStudyCardProps> = ({ title, category, image, logo }) => {
  return (
    <div
      className="relative flex h-full flex-col items-start justify-between rounded-lg p-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {image && <div className="absolute inset-0 bg-black opacity-70 rounded-lg" />}
      <div className="relative z-10">
        {category && <div className="text-xs text-gray-200">{category}</div>}
        {title && (
          <div className="mr-2 text-lg font-bold leading-tight tracking-wide text-red-300">
            {title}
          </div>
        )}
      </div>
      {logo && <img src={logo} alt={title} className="z-10 h-9 rounded-lg" />}
    </div>
  );
};

// SimpleImageCard component for rendering only an image
const SimpleImageCard: React.FC<CaseStudyCardProps> = ({ image }) => {
  return (
    <div
      className="relative flex w-full flex-col items-start justify-between rounded-lg p-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

// HoverRevealSlip component for hover animation effect
const HoverRevealSlip: React.FC<{ show: React.ReactNode }> = ({ show }) => {
  const common = "absolute flex w-full h-full [backface-visibility:hidden]";

  return (
    <div className={cn("group relative h-60 w-52 [perspective:1000px]")}>
      <div className={cn("absolute inset-0 h-full w-48 rounded-lg bg-gray-50 shadow-md")}></div>

      <div
        className={cn(
          "relative z-50 h-full w-48 origin-left transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-30deg)]",
        )}
      >
        <div className={cn("h-full w-full rounded-lg bg-black shadow-md", common)}>{show}</div>
      </div>

      <div
        className={cn(
          "z-1 absolute bottom-0 right-0 flex h-48 w-14 -translate-x-10 transform items-start justify-start rounded-r-lg bg-green-600 pl-2 pt-2 text-xs font-bold text-white transition-transform duration-300 ease-in-out [backface-visibility:hidden] group-hover:translate-x-0 group-hover:rotate-[5deg]",
        )}
      >
        <div className="-rotate-90 whitespace-nowrap pb-16 pr-9">CLICK TO VIEW</div>
      </div>
    </div>
  );
};

// Main CaseStudyCard Component
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  category,
  link,
  image,
  logo,
  type,
}) => {
  return (
    <div className="flex gap-8">
      <a href={link} className="block">
        <HoverRevealSlip
          show={
            type === "content" ? (
              <ContentCard title={title} category={category} image={image} logo={logo} />
            ) : (
              <SimpleImageCard image={image} />
            )
          }
        />
      </a>
    </div>
  );
};

CaseStudyCard.displayName = "CaseStudyCard";
export default CaseStudyCard;