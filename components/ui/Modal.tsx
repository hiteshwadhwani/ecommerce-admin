"use client";

import { DialogDescription } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface ModalProps {
  title: string;
  description: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  children,
  isOpen,
  onClose,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      return onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
