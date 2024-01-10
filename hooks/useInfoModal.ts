import { create } from 'zustand';

export interface ModalStoreInterface {
  movieId?: string;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId: string) => set({ isOpen: true, movieId }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;
