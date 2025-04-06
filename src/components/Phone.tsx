import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { HTMLAttributes } from "react";
import phoneTemplateDarkEdges from "../../public/phone-template-dark-edges.png";
import phoneTemplateWhiteEdges from "../../public/phone-template-white-edges.png";
import horse from "../../public/horse.jpg";
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
   imgSrc: string | StaticImageData;
   dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
   return (
      <div
         className={cn("relative pointer-events-none z-50 overflow-hidden", className)}
         {...props}
      >
         <Image
            className="pointer-events-none z-50 select-none"
            src={dark ? phoneTemplateDarkEdges : phoneTemplateWhiteEdges}
            alt="Phone"
            width={256}
            height={256}
         />

         <div className="absolute -z-10 inset-0">
            <Image
               className="object-cover"
               src={horse != null ? horse : imgSrc}
               alt="overlaying phone image"
               width={256}
               height={256}
            />
         </div>
      </div>
   );
};

export default Phone;
