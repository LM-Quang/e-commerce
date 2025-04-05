// import db from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";
// This is for temporary replacing Prisma connect to db
import horse from "../../../../public/horse_phone.jpg";

interface PageProps {
   searchParams: {
      [key: string]: string | string[] | undefined;
   };
}

const ImageDesignPage = async ({ searchParams }: PageProps) => {
   const { id } = searchParams;

   if (!id || typeof id !== "string") {
      return notFound();
   }

   // const configuration = await db.configuration.findUnique({
   //    where: { id },
   // });

   // if (!configuration) {
   //    return notFound();
   // }

   // const { imageUrl, width, height } = configuration;
   const { src, width, height } = horse;

   return (
      <DesignConfigurator
         configId={id}
         // configId={configuration.id}
         imageDimensions={{ width, height }}
         // imageUrl={imageUrl}
         imageUrl={src}
      />
   );
};

export default ImageDesignPage;
