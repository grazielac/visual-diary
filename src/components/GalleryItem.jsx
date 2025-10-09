import Gallery from "./Gallery";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { SlArrowLeft, SlHeart } from "react-icons/sl";
import { SlBubble } from "react-icons/sl";

export default function GalleryItem({ selectedPhoto }) {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-20 p-6 bg-amber-50 border-1 rounded-3xl overflow-y-auto">
          <DialogPanel className="bg-amber-100 h-full p-0 rounded-3xl">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div
                  onClick={() => setIsOpen(false)}
                  className="sm:p-2 h-12 w-12 mr-8 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center"
                >
                  <SlArrowLeft
                    href="#"
                    className="h-6 w-6 text-black-50 cursor-pointer"
                  />
                </div>
                <div className="mr-5 sm:p-2 h-12 w-12 flex items-center cursor-pointer justify-center hover:bg-amber-200 hover:rounded-2xl">
                  <SlHeart href="#" className="h-6 w-6 text-black-50" />
                </div>
                <div className="sm:p-2 h-12 w-12 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
                  <SlBubble
                    href="#"
                    className="h-6 w-6 text-black-50 cursor-pointer"
                  />
                </div>
              </div>
              <button
                onClick={() => console.log("Save me!")}
                className="mt-2 mr-2 h-12 w-16 bg-amber-200 rounded-2xl cursor-pointer hover:bg-amber-300"
              >
                Save
              </button>
            </div>

            <DialogTitle className="text-lg">HELLO</DialogTitle>
            <img
              className=""
              src={selectedPhoto.urls.regular}
              alt={selectedPhoto.alt_description}
            ></img>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
