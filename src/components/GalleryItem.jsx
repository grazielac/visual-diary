import Gallery from "./Gallery";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function GalleryItem() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-1/15 p-4 bg-amber-200 border-1 rounded-xl">
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
