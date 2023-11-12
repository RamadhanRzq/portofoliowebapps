import '../App.css'

function Navbar() {
  return (
    <div className="flex justify-between p-6 bg-indigo-600 text-white ">
      <p className="text-lg">Ramadhan Rizqi Saputra</p>
      <div className="flex gap-8 nav-menu">
        <a href="/">Home</a>
        <a href="/">Work</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
