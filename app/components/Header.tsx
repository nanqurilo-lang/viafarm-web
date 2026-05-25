// components/Header.tsx

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-white  shadow">
      <h1 className="text-2xl font-bold text-green-700">
        ViaFarma
      </h1>

      <nav className="flex gap-6">
       
       <div className="flex gap-6 text-black font-medium hover:text-green-700">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        </div>
      </nav>
    </header>
  );
}