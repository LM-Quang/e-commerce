import db from "@/db";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";

interface PageProps {
   searchParams: {
      [key: string]: string | string[] | undefined;
   };
}
// { searchParams }: PageProps
const Page = async ({ searchParams }: PageProps) => {
   // const { id } = searchParams;
   const { id } = await searchParams;
   if (!id || typeof id !== "string") {
      return notFound();
   }

   const configuration = await db.configuration.findUnique({
      where: { id },
   });
   if (!configuration) {
      return notFound();
   }
   return <DesignPreview configuration={configuration} />;
};

export default Page;
