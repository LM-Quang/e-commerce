import React from "react";
import Stars from "./Stars";
import Image from "next/image";
import { Check } from "lucide-react";
import { UserCommentProps } from "@/type/UserCommentProps";

const UserComment = ({ numOfStars, content, userAvatarSrc, username }: UserCommentProps) => {
   return (
      <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
         <div className="flex gap-0 mb-2">
            <Stars numOfStars={numOfStars} />
         </div>
         <div className="text-lg leading-8">
            <p>{content}</p>
         </div>
         <div className="flex gap-4 mt-2">
            <Image
               className="rounded-full object-cover"
               src={userAvatarSrc}
               alt="user"
               width={48}
               height={48}
            />
            <div className="flex flex-col">
               <p className="font-semibold">{username}</p>
               <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserComment;
