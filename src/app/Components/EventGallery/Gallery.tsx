"use client";
import React from "react";
import CaseStudyCard from "../animata/card/case-study-card";

const BackgroundBeamsDemo: React.FC = () => {
  return (
    <div className="min-h-[80vh] w-full bg-black flex flex-col items-center justify-center antialiased">
      <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-center">
        <CaseStudyCard
          category="GALLERY"
          image=""
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        <CaseStudyCard
          category="GALLERY"
          image=""
          link="https://drive.google.com/drive/folders/1ouTp1pCGBvwfdzDnjpXQ8UYTXIMM1GwY?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Explore DAY 1"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        <CaseStudyCard
          category="GALLERY"
          image=""
          link="https://drive.google.com/drive/folders/12k8oETBn1SBqqqZZ5KOkBk1wWygzJ-ZX?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Explore DAY 2"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        <CaseStudyCard
          category="GALLERY"
          image=""
          link="https://drive.google.com/drive/folders/1nDv9l7orAHnrbhXbj1elJgFx6VXTcfso?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="WINNERS"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        <CaseStudyCard
          category="GALLERY"
          image=""
          link="https://drive.google.com/drive/folders/1w_XuJ4v-AxKFLxDUnoRmXyZOAuKpr0pq?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="CULTURALS"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
      </div>
    </div>
  );
};

BackgroundBeamsDemo.displayName = "BackgroundBeamsDemo";
export default BackgroundBeamsDemo;