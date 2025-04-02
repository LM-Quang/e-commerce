import React from "react";
import { Star } from "lucide-react";

interface StarsProps {
   numOfStars: number;
}

const Stars = ({ numOfStars }: StarsProps) => {
   return (
      <>
         {[...Array(numOfStars)].map((_, index) => (
            <Star key={index} className="h-5 w-5 text-green-600 fill-green-600" />
         ))}
      </>
   );
};

export default Stars;
