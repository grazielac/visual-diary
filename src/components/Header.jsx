import Vd from "../assets/vd.png";
import Search from "../assets/search.png";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-amber-400 flex items-center">

      {/* left: logo + home feed */}
      <div className="flex justify-between items-center">
        <img src={Vd} alt="Site Logo" className="h-10 m-4" />
        <a href="#" className="hover:underline mr-4 text-sm">Home Feed</a>
      </div>
      {/* right: profile + search + etc */}
      <div>
        <img src={Search} alt="Search Icon" className="h-7 m-4" />
        <FaSearch className="h-7 m-4 text-gray-50" />
      </div>
    </header>
  );
}
