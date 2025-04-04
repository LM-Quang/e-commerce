"use client";

import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image, { StaticImageData } from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./Phone";
import testimonial1 from "../../public/testimonials/1.jpg";
import testimonial2 from "../../public/testimonials/2.jpg";
import testimonial3 from "../../public/testimonials/3.jpg";
import testimonial4 from "../../public/testimonials/4.jpg";
import testimonial5 from "../../public/testimonials/5.jpg";

const PHONES: StaticImageData[] = [
   testimonial1,
   testimonial2,
   testimonial3,
   testimonial4,
   testimonial5,
];

const splitArray = <T,>(array: T[], numParts: number): T[][] => {
   const result: T[][] = [];
   array.forEach((item, i) => {
      const index = i % numParts;
      if (!result[index]) {
         result[index] = [];
      }
      result[index].push(item);
   });

   return result;
};

const ReviewColumn = ({
   reviews,
   className,
   reviewClassName,
   msPerPixel = 0,
}: {
   reviews: StaticImageData[];
   className?: string;
   reviewClassName?: (reviewIndex: number) => string;
   msPerPixel?: number;
}) => {
   const columnRef = useRef<HTMLDivElement | null>(null);
   const [columnHeight, setColumnHeight] = useState(0);
   const duration = `${columnHeight * msPerPixel}ms`;

   useEffect(() => {
      if (!columnRef.current) return;

      const resizeObserver = new window.ResizeObserver(() => {
         setColumnHeight(columnRef.current?.offsetHeight ?? 0);
      });

      resizeObserver.observe(columnRef.current);

      return () => {
         resizeObserver.disconnect();
      };
   }, []);

   return (
      <div
         ref={columnRef}
         className={cn("space-y-8 py-4", className)}
         style={{
            animation: `marquee ${duration} linear infinite`,
         }}
      >
         {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
            <Review
               key={reviewIndex}
               className={reviewClassName?.(reviewIndex % reviews.length)}
               imgSrc={imgSrc}
            />
         ))}
      </div>
   );
};

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
   imgSrc: StaticImageData;
}
const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
   const POSSIBLE_ANIMATION_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];
   const animationDelay =
      POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)];

   return (
      <div
         className={cn(
            "rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
            className
         )}
         style={{
            animation: `fade-in 0.5s linear forwards`,
            animationDelay,
         }}
         {...props}
      >
         <Phone imgSrc={imgSrc.src} />
      </div>
   );
};

const ReviewGrid = () => {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const isInView = useInView(containerRef, { once: true, amount: 0.4 });
   const columns = splitArray(PHONES, 3);
   const column1 = columns[0];
   const column2 = columns[1];
   const column3 = columns[2] ? splitArray(columns[2], 2) : [[]];

   return (
      <div
         ref={containerRef}
         className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
      >
         {isInView ? (
            <>
               <ReviewColumn
                  reviews={[...column1, ...column3.flat(), ...column2]}
                  reviewClassName={(reviewIndex) =>
                     cn({
                        "md:hidden": reviewIndex >= column1.length + column3[0].length,
                        "lg:hidden": reviewIndex >= column1.length,
                     })
                  }
                  msPerPixel={10}
               />
               <ReviewColumn
                  reviews={[...column2, ...(column3[1] || [])]}
                  className="hidden md:block"
                  reviewClassName={(reviewIndex) =>
                     reviewIndex >= column2.length ? "lg:hidden" : ""
                  }
                  msPerPixel={15}
               />
               <ReviewColumn
                  reviews={[...column3.flat()]}
                  className="hidden md:block"
                  msPerPixel={10}
               />
            </>
         ) : null}
         <div className="pointer-ev absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
         <div className="pointer-ev absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
      </div>
   );
};

const Reviews = () => {
   return (
      <MaxWidthWrapper className="relative max-w-5xl">
         <Image
            aria-hidden="true"
            src="/what-people-are-buying.png"
            className="absolute select-none hidden xl:block -left-32 top-1/3"
            alt="buying"
            width={100}
            height={100}
         />

         <ReviewGrid />
      </MaxWidthWrapper>
   );
};

export default Reviews;
