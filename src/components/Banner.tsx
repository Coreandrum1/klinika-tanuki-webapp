import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";

export const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${
        isOpen ? "" : "hidden "
      }bg-[var(--radioactive-light)] p-1 text-[var(--no-black)] w-full grid items-center [grid-template-columns:auto_minmax(0,1fr)_auto]`}
    >
      <div />
      <p className="col-start-2 text-center">
        Nuestra página aún está en desarrollo
      </p>
      <div className="flex justify-end col-start-3">
        <button
          aria-label="Cerrar banner"
          onClick={() => setIsOpen(false)}
          className="rounded hover:text-[var(--radioactive-light)] hover:bg-[var(--no-black)]"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
