import { useEffect } from "react";

export default function useModalClose({  setOpen }) {
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 10000);
  }, [setOpen]);
}
