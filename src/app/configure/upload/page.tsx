"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { toast } from "sonner";

const FileUploadPage = () => {
   const [isDragOver, setIsDragOver] = useState<boolean>(false);
   const [uploadProgress, setUploadProgress] = useState<number>(0);
   const [isPending, startTransition] = useTransition();
   const router = useRouter();

   const onDropRejected = (rejectedFiles: FileRejection[]) => {
      const [file] = rejectedFiles;
      setIsDragOver(false);
      toast.error(`${file.file.type} type is not supported.`);
   };

   // This is for demo Waiting time when uploading and redirect to /configure/design?id=...
   const [isUploading, setIsUploading] = useState<boolean>(false);
   // Upload file to Storage: S3, cloudfare,...
   const startUpload = (acceptedFiles: File[], id: string) => {
      setIsUploading(true);
      for (let i = 1; i <= 10; i++) {
         setTimeout(() => {
            setUploadProgress(i * 10);
         }, i * 1000);
      }
      setTimeout(() => {
         setIsUploading(false);
         startTransition(() => {
            router.push(`/configure/design?id=${id}`);
         });
      }, 11000);
      console.log(acceptedFiles);
      console.log(id);
   };

   const onDropAccepted = (acceptedFiles: File[]) => {
      startUpload(acceptedFiles, "123");
      setIsDragOver(false);
   };

   return (
      <div
         className={cn(
            "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
            { "ring-blue-900/25 bg-blue-900/10": isDragOver }
         )}
      >
         <div className="relative flex flex-1 flex-col items-center justify-center w-full">
            <Dropzone
               onDropRejected={onDropRejected}
               onDropAccepted={onDropAccepted}
               accept={{
                  "image/png": [".png"],
                  "image/jpeg": [".jpeg"],
                  "image/jpg": [".jpg"],
               }}
               onDragEnter={() => {
                  setIsDragOver(true);
               }}
               onDragLeave={() => {
                  setIsDragOver(false);
               }}
            >
               {({ getRootProps, getInputProps }) => (
                  <div
                     className="h-full w-full flex-1 flex flex-col items-center justify-center"
                     {...getRootProps()}
                  >
                     <input {...getInputProps()} />
                     {isDragOver ? (
                        <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
                     ) : isUploading || isPending ? (
                        <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
                     ) : (
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <Image className="h-6 w-6 text-zinc-500 mb-2" />
                     )}
                     <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                        {isUploading ? (
                           <div className="flex flex-col items-center">
                              <p>Uploading...</p>
                              <Progress
                                 value={uploadProgress}
                                 className="mt-2 w-40 h-2 bg-gray-300"
                              />
                           </div>
                        ) : isPending ? (
                           <div className="flex flex-col items-center">
                              <p>Redirecting, please wait...</p>
                           </div>
                        ) : isDragOver ? (
                           <p>
                              <span className="font-semibold">Drop file</span> to upload{" "}
                           </p>
                        ) : (
                           <p>
                              <span className="font-semibold">Click to upload</span> or drag and
                              drop
                           </p>
                        )}
                     </div>

                     {isPending ? null : <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>}
                  </div>
               )}
            </Dropzone>
         </div>
      </div>
   );
};

export default FileUploadPage;
