import Gallery from "./Gallery";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function GalleryItem({ photo, close }) {
  let [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 px-4 py-2 font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Open dialog
      </Button>

      <Dialog onClick={open} onClose={close} className="relative z-50">
        <DialogPanel className="bg-amber-300">
          <div className="w-screen">
            <p>HELLO WORLD</p>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
