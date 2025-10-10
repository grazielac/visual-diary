import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { SlArrowLeft, SlArrowRight, SlHeart } from "react-icons/sl";
import { SlBubble } from "react-icons/sl";

export default function GalleryItem({
  selectedPhoto,
  onCloseDialog,
  setSelectedPhoto,
  photos,
  selectedIndex,
  setSelectedIndex
}) {
    const currentPhoto = photos[selectedIndex];

    const leftBtn = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };
    const rightBtn = () => {
        if (selectedIndex < photos.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };
//   console.log("selectedPhoto:", selectedPhoto);
  return (
    <>
      <Dialog open={true} onClose={onCloseDialog} className="relative z-50">
        <DialogPanel className="flex flex-col fixed inset-20 border-1 border-gray-300 bg-amber-50 h-4/5 rounded-3xl">
          <div className="flex justify-between items-center mt-8 mr-10 ml-10">
            <div className="flex">
              <div className="sm:p-2 h-12 w-12 mr-8 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
                <SlArrowLeft className="h-6 w-6 text-black-50 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-t-1 overflow-scroll border-l-1 border-r-1 border-gray-400 ml-20 mr-125 rounded-2xl h-full">
            <div className="flex mt-5 justify-between mr-8 sticky top-0">
              <div className="flex">
                <div className="mr-5 ml-5 sm:p-2 h-12 w-12 flex items-center cursor-pointer justify-center hover:bg-amber-200 hover:rounded-2xl">
                  <SlHeart className="h-6 w-6 text-black-50" />
                </div>
                <div className="sm:p-2 h-12 w-12 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
                  <SlBubble className="h-6 w-6 text-black-50 cursor-pointer" />
                </div>
              </div>
              <div className="flex">
                <button className="sticky top-0 h-12 w-16 bg-amber-200 rounded-2xl cursor-pointer hover:bg-amber-300">
                  Save
                </button>
              </div>
            </div>
            <DialogTitle className="text-lg"></DialogTitle>
            <div className="flex justify-center pt-15 2xl:max-h-60">
              <div
                onClick={leftBtn}
                className="flex flex-row items-center"
              >
                <SlArrowLeft className="h-6 w-6 text-black-50 cursor-pointer" />
              </div>
              <img
                className=" sm:h-5/6 rounded-3xl"
                src={selectedPhoto?.urls?.small}
                alt={selectedPhoto?.alt_description}
              ></img>

              <div 
              onClick={rightBtn}
              className="flex flex-row items-center">
                <SlArrowRight className="h-6 w-6 text-black-50 cursor-pointer" />
              </div>
            </div>

            {/* COMMENT SECTION */}
            <div className="border-t-1 border-gray-400 mt-15">
              <div className="pl-5 pt-2">
                <p>No comments yet</p>
              </div>
              <div className="border-gray-300 border rounded-4xl ml-5 mr-5 mt-3 mb-5">
                <div className="p-2 pl-5 text-gray-400">
                  <h3>Add a comment to start the conversation</h3>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
