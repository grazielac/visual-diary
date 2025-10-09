import Vd from "../assets/vd.png";
import { SlPaperPlane } from "react-icons/sl";
import { SlBell } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { SlMenu } from "react-icons/sl";

export default function Header() {
  return (
    <header className="bg-gradient-to-t from-white to-yellow-100 flex justify-between items-center">

      {/* left: logo + home feed */}
      <div className="flex justify-between items-center ml-10">
        <img src={Vd} alt="Site Logo" className="h-10 m-4 mr-8 cursor-pointer" />
        <div className="sm:p-2 flex justify-between items-center cursor-pointer hover:bg-amber-200 hover:rounded-xl">
          <a href="#" className="text-sm pl-4 pr-4 mt-0">Home Feed</a>
          <SlMenu className="h-6 w-6 text-black-50" />
        </div>
      </div>
      {/* right: profile + search + etc */}
      {/* source: react-icons.github.io */}
      <div className="flex mr-10 p-5">
        <div className="sm:p-2 h-12 w-12 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
          <SlMagnifier href="#" className="h-6 w-6 text-black-50 cursor-pointer" />
        </div>
        <div className="sm:p-2 h-12 w-12 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
          <SlBell href="#" className="h-6 w-6 text-black-50 cursor-pointer" />
        </div>
        <div className="sm:p-2 h-12 w-12 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
          <SlPaperPlane href="#" className="h-6 w-6 text-black-50 cursor-pointer" />
        </div>
        <div className="sm:p-2 h-12 w-12 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
          <SlUser href="#" className="h-6 w-6 text-black-50 cursor-pointer" />
        </div>
        <div className="sm:p-2 h-12 w-12 hover:bg-amber-200 hover:rounded-xl flex items-center justify-center">
          <SlArrowDown href="#" className="h-6 w-6 text-black-50 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
