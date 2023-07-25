'use client'

import { create } from "zustand";

interface UseStoreModalStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useStoreModal = create<UseStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useStoreModal
