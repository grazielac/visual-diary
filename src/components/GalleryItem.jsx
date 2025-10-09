import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { SlArrowLeft, SlHeart } from "react-icons/sl";
import { SlBubble } from "react-icons/sl";

export default function GalleryItem({ selectedPhoto, onCloseDialog }) {
  return (
    <>
      <Dialog open={true} onClose={onCloseDialog} className="relative z-50">
        <DialogPanel className="fixed inset-20 border-1 overflow-y-auto bg-amber-50 h-full rounded-3xl">
          <div className="flex justify-between items-center mt-8 mr-10 ml-10">
            <div className="flex">
              <div
                onClick={onCloseDialog}
                className="sm:p-2 h-12 w-12 mr-8 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center"
              >
                <SlArrowLeft className="h-6 w-6 text-black-50 cursor-pointer" />
              </div>
              <div className="mr-5 sm:p-2 h-12 w-12 flex items-center cursor-pointer justify-center hover:bg-amber-200 hover:rounded-2xl">
                <SlHeart className="h-6 w-6 text-black-50" />
              </div>
              <div className="sm:p-2 h-12 w-12 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
                <SlBubble className="h-6 w-6 text-black-50 cursor-pointer" />
              </div>
            </div>
            <button
              onClick={() => console.log("Save me!")}
              className="h-12 w-16 bg-amber-200 rounded-2xl cursor-pointer hover:bg-amber-300"
            >
              Save
            </button>
          </div>

          <DialogTitle className="text-lg"></DialogTitle>
          <div className="flex justify-center">
            <img
              className="w-6/12 rounded-3xl"
              src={selectedPhoto?.urls?.small}
              alt={selectedPhoto?.alt_description}
            ></img>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
// console.log("onCloseDialog is:", typeof onCloseDialog);
