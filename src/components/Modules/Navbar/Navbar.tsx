export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-8 px-40 2xl:py-6 2xl:px-20 fixed left-0 right-0">
      <img className="2xl:w-40 2xl:h-12" src="icons/logo-desktop.svg" alt="" />

      <ul className="flex items-center gap-7.5 bg-black-6 py-2.5 ps-2.5 pe-10 rounded-xl border-4 border-black-12 child:text-lg">
        <li className="bg-black-10 py-3.5 px-6 rounded-lg border-1 border-transparent">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movies & Shows</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Subscription</a>
        </li>
      </ul>

      <div className="flex items-center gap-7.5 child:w-8 child:h-8">
        <img src="icons/magnifying-glass.svg" alt="" />
        <img src="icons/bell.svg" alt="" />
      </div>
    </div>
  );
}