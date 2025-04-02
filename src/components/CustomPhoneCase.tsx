import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import snake1 from "../../public/snake-1.png";
import user1 from "../../public/users/user-1.png";
import user2 from "../../public/users/user-2.png";
import user3 from "../../public/users/user-3.png";
import user4 from "../../public/users/user-4.jpg";
import user5 from "../../public/users/user-5.jpg";
import yourImage from "../../public/your-image.png";
import line from "../../public/line.png";
import testimonial1 from "../../public/testimonials/1.jpg";
import Stars from "./Stars";

const checklist = [
   "High-quality, durable material",
   "5 year print guarantee",
   "Modern iPhone models supported",
];
interface UserImg {
   imgSrc: StaticImageData;
   alt: string;
   width: number;
   height: number;
}
const userImgs: UserImg[] = [
   { imgSrc: user1, alt: "User 1", width: 40, height: 40 },
   { imgSrc: user2, alt: "User 1", width: 40, height: 40 },
   { imgSrc: user3, alt: "User 1", width: 40, height: 40 },
   { imgSrc: user4, alt: "User 1", width: 40, height: 40 },
   { imgSrc: user5, alt: "User 1", width: 40, height: 40 },
];

const numberOfFiveStartsEvaluation = 1250;

const CustomPhoneCase = () => {
   return (
      <section>
         <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
               <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                     <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                     <Image src={snake1} alt="logo" width={snake1.width} height={snake1.height} />
                  </div>
                  <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                     Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                     Phone Case
                  </h1>
                  <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                     Capture your faviorite memories with your own,{" "}
                     <span className="font-semibold">one-of-one</span> phone case. CaseCobra allows
                     you to protect your memories, not just your phone case.
                  </p>

                  <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                     <div className="space-y-2">
                        {checklist.map((item, index) => {
                           return (
                              <li key={index} className="flex gap-1.5 items-center text-left">
                                 <Check className="h-5 w-5 shrink-0 text-green-600" />
                                 {item}
                              </li>
                           );
                        })}
                     </div>
                  </ul>

                  <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                     <div className="flex -space-x-4">
                        {userImgs.map((img, index) => {
                           return (
                              <Image
                                 key={index}
                                 src={img.imgSrc}
                                 alt={img.alt}
                                 className="inline-block rounded-full ring-2 ring-slate-100"
                                 width={img.width}
                                 height={img.height}
                              />
                           );
                        })}
                     </div>

                     <div className="flex flex-col justify-between items-center sm:items-start">
                        <div className="flex gap-0.5">
                           <Stars numOfStars={5} />
                        </div>

                        <p>
                           <span className="font-semibold">{numberOfFiveStartsEvaluation}</span>{" "}
                           happy customers
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
               <div className="relative md:max-w-xl">
                  <Image
                     src={yourImage}
                     className="absolute lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                     width={yourImage.width}
                     height={yourImage.height}
                     alt="Your image"
                  />
                  <Image
                     src={line}
                     className="absolute -left-6 -bottom-6 select-none"
                     alt="Line"
                     width={line.width}
                     height={line.height}
                  />
                  <Phone className="w-64" imgSrc={testimonial1} />
               </div>
            </div>
         </MaxWidthWrapper>
      </section>
   );
};

export default CustomPhoneCase;
