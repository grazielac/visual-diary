import Gallery from "./Gallery";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function GalleryItem({ close }) {
  let [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 px-4 py-2 font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Open dialog
      </Button>

      <Dialog open={isOpen} onClose={close} className="relative z-50">
        <div className="bg-amber-200">
          <DialogPanel className="bg-amber-300 p-12">
            <DialogTitle className="text-lg"></DialogTitle>
            <p>HELLO WORLD</p>
            <div>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
