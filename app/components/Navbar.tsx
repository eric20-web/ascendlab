export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 text-white absolute top-0 left-0 w-full z-50">
      <h1 className="text-3xl font-bold tracking-widest">
        ASCENDLAB
      </h1>

      <div className="flex gap-8 text-lg">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}