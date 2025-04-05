// import { User } from "lucide-react";
export interface User {
   username: string;
   email: string;
}

export const getUser = async () => {
   const user: User = { username: "User", email: "ab@gmail.com" };
   return user;
};
