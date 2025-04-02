import React from "react";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Reviews from "@/components/Reviews";
import Image from "next/image";
import { UserCommentProps } from "@/type/UserCommentProps";
import user1 from "../../public/users/user-1.png";
import user4 from "../../public/users/user-4.jpg";
import UserComment from "./UserComment";

const userComments: UserCommentProps[] = [
   {
      numOfStars: 5,
      content:
         "The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and the image is super clear, on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it.",
      userAvatarSrc: user1,
      username: "Quang",
   },
   {
      numOfStars: 4,
      content:
         "I usually leep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, looks brand new after about half a year. I dig it.",
      userAvatarSrc: user4,
      username: "Minh",
   },
];

const ValueProposetion = () => {
   return (
      <section className="bg-slate-100 py-24">
         <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
               <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                  What our{" "}
                  <span className="relative px-2">
                     customers{" "}
                     <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
                  </span>{" "}
                  say
               </h2>
               <Image
                  src="/snake-2.png"
                  className="order-0 lg:order-2"
                  width={96}
                  height={96}
                  alt="snake"
               />
            </div>

            {/* User comments */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
               {userComments.map((comment, index) => {
                  return (
                     <UserComment
                        key={index}
                        numOfStars={comment.numOfStars}
                        content={comment.content}
                        userAvatarSrc={comment.userAvatarSrc}
                        username={comment.username}
                     />
                  );
               })}
            </div>
         </MaxWidthWrapper>

         <div className="pt-16">
            <Reviews />
         </div>
      </section>
   );
};

export default ValueProposetion;
