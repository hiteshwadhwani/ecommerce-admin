"use client";

import React, { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "./button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";

interface UploadImageProps {
  disabled: boolean;
  value: string[];
  onChange: (value: string) => void
  onRemove: (value: string) => void
}

const UploadImage: React.FC<UploadImageProps> = ({ disabled, value, onChange, onRemove }) => {
  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const onUpload = (result: any) => {
      onChange(result.info?.url)
  }
  return (
    <>
      <div className="flex flex-row mb-4 items-center gap-x-4">
        {value.map((item) => (
          <div key={item} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <div onClick={() => onRemove(item)} className="absolute top-2 right-2 z-10">
              <Button type="button" size={"sm"} variant={"destructive"}>
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image src={item} fill alt="Image" className="object-cover" />
          </div>
        ))}
      </div>
      <CldUploadWidget  onUpload={onUpload} uploadPreset="gzd11c2d">
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <Button
              disabled={disabled}
              variant={"secondary"}
              type="button"
              onClick={onClick}
            >
              <ImagePlus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
export default UploadImage;
