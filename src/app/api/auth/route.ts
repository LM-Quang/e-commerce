import { User } from "lucide-react";

export const GET = () => {
   // console.log("Handle login");
};

export interface User {
   username: string;
   email: string;
}

export const getUser = async () => {
   // console.log("Get user data");
   const user: User = { username: "User", email: "ab@gmail.com" };
   return user;
};
