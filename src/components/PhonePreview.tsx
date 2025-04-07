"use client";

import { CaseColor } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image from "next/image";
import clearPhone from "../../public/clearphone.png";

const PhonePreview = ({
   croppedImageUrl,
   color,
}: {
   croppedImageUrl: string;
   color: CaseColor;
}) => {
   const ref = useRef<HTMLDivElement>(null);

   const [renderedDimensions, setRenderedDimensions] = useState({
      height: 0,
      width: 0,
   });

   const handleResize = () => {
      if (!ref.current) return;
      const { width, height } = ref.current.getBoundingClientRect();
      setRenderedDimensions({ width, height });
   };

   useEffect(() => {
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
   }, []);
   // [ref.current]

   let caseBackgroundColor = "bg-zinc-950";
   if (color === "blue") caseBackgroundColor = "bg-blue-950";
   if (color === "rose") caseBackgroundColor = "bg-rose-950";

   return (
      <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
         <div
            className="absolute z-20 scale-[1.0352]"
            style={{
               left: renderedDimensions.width / 2 - renderedDimensions.width / (1216 / 121),
               top: renderedDimensions.height / 6.22,
            }}
         >
            <Image
               width={renderedDimensions.width / (3000 / 637)}
               height={50}
               className={cn(
                  "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
                  caseBackgroundColor
               )}
               src={croppedImageUrl}
               alt="phone"
            />
         </div>

         <div className="relative h-full w-full z-40">
            <Image
               alt="phone"
               src={clearPhone}
               className="pointer-events-none h-full w-full antialiased rounded-md"
               width={clearPhone.width}
               height={clearPhone.height}
            />
         </div>
      </AspectRatio>
   );
};

export default PhonePreview;
