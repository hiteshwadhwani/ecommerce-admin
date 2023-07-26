"use client";

import useStoreModal from "@/hooks/useStoreModal";
import { useEffect } from "react";

const SetUpPage = () => {
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return null
};
export default SetUpPage;
