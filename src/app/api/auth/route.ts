export interface User {
   id: string;
   username: string;
   email: string;
}

export const getUser = () => {
   const user: User = { id: "1", username: "User", email: "ab@gmail.com" };
   return user;
};
