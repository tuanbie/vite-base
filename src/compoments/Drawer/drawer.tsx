import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";
interface DrawerFormProps {
  children: ReactNode;
  isOpen: boolean;
}
const DrawerForm: React.FC<DrawerFormProps> = ({ isOpen, children }) => {
  const [open, setOpen] = useState(isOpen ? true : false);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50 w-full">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500  "
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute right-0 top-0 flex duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-slate-950 hover:text-cs_light_dark focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className=" h-full flex-col overflow-y-scroll bg-white  shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold leading-6 text-gray-900"> {children}</DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DrawerForm;
