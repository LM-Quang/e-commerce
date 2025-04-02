import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import arrow from "../../public/arrow.png";
import horse from "../../public/horse.jpg";
import Phone from "@/components/Phone";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const benefits: string[] = [
   "High-quality silicone material",
   "Scratch and findgerprint resistant coating",
   "Wireless charging compatible",
   "5 year pring warranty",
];

const ImageUpload = () => {
   return (
      <section>
         <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
               <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                     Upload your photo and get{" "}
                     <span className="relative px-2 bg-green-600 text-white">your own case </span>{" "}
                     say
                  </h2>
               </div>
            </div>

            <div className="mx-auto max-w-6xl px6 lg:px-8">
               <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
                  <Image
                     src={arrow}
                     className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                     alt="arrow"
                     width={arrow.width}
                     height={arrow.height}
                  />
                  <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset inset-ring-gray-900/10 lg:rounded-2xl">
                     <Image
                        src={horse}
                        width={horse.width}
                        height={horse.height}
                        className="rounded-md object-cover bg-white shadow-2xl ring-1 inset-ring-gray-900/10"
                        alt="horse"
                     />
                  </div>

                  <Phone className="w-60" imgSrc={horse} />
               </div>
            </div>

            <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
               {benefits.map((item, index) => {
                  return (
                     <li key={index} className="w-fit">
                        <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                        {item}
                     </li>
                  );
               })}

               <div className="flex justify-center">
                  <Link
                     href="/configure/upload"
                     className={buttonVariants({ size: "lg", className: "mx-auto mt-8" })}
                  >
                     Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
               </div>
            </ul>
         </MaxWidthWrapper>
      </section>
   );
};

export default ImageUpload;
