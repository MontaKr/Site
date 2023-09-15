import { create } from "zustand";

export const useStore = create((set) => ({
  isMouseOverSidebar: false,

  enterSidebar: () => {
    console.log("yes");
    set({ isMouseOverSidebar: true });
  },

  leaveSidebar: () => {
    console.log("no");
    set({ isMouseOverSidebar: false });
  },
}));
