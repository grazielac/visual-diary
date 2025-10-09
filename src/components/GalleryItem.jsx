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
        <div className="fixed inset-20 p-6 bg-amber-50 border-1 rounded-3xl">
          <DialogPanel className="bg-amber-100 h-full p-12  rounded-3xl">
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
