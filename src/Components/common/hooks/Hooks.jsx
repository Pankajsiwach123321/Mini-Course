import { useEffect, useState } from "react";

export const useOverflowHidden = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return [isOpen, setOpen];
};
