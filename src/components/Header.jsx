import Vd from "../assets/vd.png";
import { SlBubble } from "react-icons/sl";
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
        <div className="flex justify-between items-center cursor-pointer">
          <a href="#" className="text-sm">Home Feed</a>
          <SlMenu className="h-7 m-4 text-black-50" />
        </div>
      </div>
      {/* right: profile + search + etc */}
      {/* source: react-icons.github.io */}
      <div className="flex mr-10">
        <SlMagnifier href="#" className="h-7 m-4 text-black-50 cursor-pointer" />
        <SlBell href="#" className="h-7 m-4 text-black-50 cursor-pointer" />
        <SlBubble href="#" className="h-7 m-4 text-black-50 cursor-pointer" />
        <SlUser href="#" className="h-7 m-4 text-black-50 cursor-pointer" />
        <SlArrowDown href="#" className="h-7 m-4 text-black-50 cursor-pointer" />
      </div>
    </header>
  );
}
