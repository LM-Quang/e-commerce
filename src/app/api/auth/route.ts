// import { User } from "lucide-react";
export interface User {
   id: string;
   username: string;
   email: string;
}

export const getUser = () => {
   const user: User = { id: "abc", username: "User", email: "ab@gmail.com" };
   return user;
};
