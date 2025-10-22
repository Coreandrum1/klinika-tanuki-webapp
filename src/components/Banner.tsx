import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";

export const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${
        isOpen ? "" : "hidden "
      }bg-[var(--radioactive-light)] text-[var(--no-black)] text-center p-1 relative w-full`}
    >
      <p>Nuestra página aún está en desarrollo</p>
      <XMarkIcon
        onClick={() => {
          setIsOpen(false);
        }}
        className="absolute top-0 right-0 m-1 size-6 hover:text-[var(--radioactive-light)] hover:bg-[var(--no-black)] hover:cursor-pointer"
      />
    </div>
  );
};
