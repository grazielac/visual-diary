import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="bg-amber-400 p-4 flex items-center">
      <p>Visual Diary</p>
      <img src={Logo} alt="Site Logo" />
      <h1 className="bg-indigo-300">HELLO WORLD</h1>
    </div>
  );
}
