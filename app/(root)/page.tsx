"use client";

import { Button } from "@/components/ui/button";
import useStoreModal from "@/hooks/useStoreModal";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect } from "react";

const SetUpPage = () => {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div>root page</div>;
};
export default SetUpPage;
