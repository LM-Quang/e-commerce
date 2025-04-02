import { StaticImageData } from "next/image";

export interface UserCommentProps {
   numOfStars: number;
   content: string;
   userAvatarSrc: StaticImageData;
   username: string;
}
