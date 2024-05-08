export default function Navbar() {
  return (
    <div className="container flex items-center py-8 justify-between fixed left-0 right-0">
      <img
        className="w-28 h-12 2xl:w-40 2xl:h-12 3xl:w-48 3xl:h-14"
        src="icons/logo-desktop.svg"
        alt=""
      />
      <img className="md:hidden w-12 h-12" src="icons/bars-3.svg" alt="" />
      <ul className="hidden md:flex items-center gap-4 2xl:gap-7.5 bg-black-6 py-2 ps-2 pe-8 2xl:py-2.5 2xl:ps-2.5 2xl:pe-10 rounded-xl border-4 border-black-12 child:text-lg child:text-gray-75">
        <li className="bg-black-10 py-3.5 px-6 rounded-lg border-1 border-transparent">
          <a className="text-white" href="#">
            Home
          </a>
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

      <div className="hidden md:flex items-center gap-4 child:w-6 child:h-6 3xl:gap-7.5 child:3xl:w-8 child:3xl:h-8">
        <img src="icons/magnifying-glass.svg" alt="" />
        <img src="icons/bell.svg" alt="" />
      </div>
    </div>
  );
}
