"use server";

import db from "@/db";
import { getUser } from "../api/auth/route";

export const getAuthStatus = async () => {
   const user = getUser();

   if (!user?.id || !user.email) {
      throw new Error("Invalid user data");
   }

   const existingUser = await db.user.findFirst({
      where: { id: user.id },
   });

   if (!existingUser) {
      await db.user.create({
         data: {
            id: user.id,
            email: user.email,
         },
      });
   }

   return { success: true };
};
