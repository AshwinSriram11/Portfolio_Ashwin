import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="bg-[#4E20AF] w-full h-[90px] flex flex-row justify-end font-OpenSans font-semibold">
      <div className="my-auto ml-4 basis-1/2">
        <img src={logo} alt="logo" className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
      </div>
      <div className="my-auto basis-1/2 flex flex-row justify-end">
        <a href="#" className="px-4 hover:text-[#0019FF] transition ease-in text-white text-lg sm:text-xl md:text-2xl">
          Home
        </a>
        <a href="#" className="px-4 hover:text-[#0019FF] transition ease-in text-white text-lg sm:text-xl md:text-2xl">
          About
        </a>
        <a href="#" className="px-4 hover:text-[#0019FF] transition ease-in text-white text-lg sm:text-xl md:text-2xl">
          Skills
        </a>
        <a href="#" className="px-4 hover:text-[#0019FF] transition ease-in text-white text-lg sm:text-xl md:text-2xl">
          Portfolio
        </a>
        <a href="#" className="px-4 hover:text-[#0019FF] transition ease-in text-white text-lg sm:text-xl md:text-2xl">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
