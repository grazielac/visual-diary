import Vd from "../assets/vd.png";

export default function Header() {
  return (
    <header className="bg-amber-400 flex items-center">
      <img src={Vd} alt="Site Logo" className="h-10 m-4" />
    </header>
  );
}
