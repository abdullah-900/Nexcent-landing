import { useState } from "react";

const Navbar = () => {
  const [isActive,setIsActive]=useState(false)
  function handleClick() {
    setIsActive(!isActive)
  }
  return (
    <header>
    <nav className=" shrink-0 h-[5.25rem] flex justify-around items-center bg-Neutral/Silver">
        <img className="w-[8.125rem] h-5" src="./Logo.svg" alt="Logo"></img>
       {isActive || <img onClick={handleClick} className="block lg:hidden"   src="burgermenu.svg" alt="burgermenu" />}
       {isActive && <img onClick={handleClick} className="block lg:hidden"   src="burgeropened.svg" alt="burgermenu" />}
      <ul className=" hidden lg:flex md:gap-[1.25rem]  lg:gap-[3.125rem] ">
        <li className="">
          <a className="font-medium" href="">Home</a>
        </li>
        <li>
          <a className="" href="">Service</a>
        </li>
        <li >
          <a className="" href="">Feature</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">Testimonial</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
      <div className="hidden lg:flex gap-[0.875rem] ">
        <button className=" text-Brand/Primary  pl-5 pr-5 pt-2.5 pb-2.5 flex items-center rounded-md text-center text-sm not-italic font-medium leading-5">Login</button>
        <button className=" bg-Brand/Primary text-Neutral/White  pl-5 pr-5 pt-2.5 pb-2.5 flex items-center rounded-md  text-sm not-italic font-medium leading-5">Sign Up</button>
      </div>
    </nav>
    { isActive && <div  className="flex flex-col items-center justify-center lg:hidden gap-5 bg-Neutral/Silver px-5 py-5">
    <div className="flex gap-3">
    <button className=" text-Brand/Primary  pl-5 pr-5 pt-2.5 pb-2.5 flex items-center rounded-md text-center text-sm not-italic font-medium leading-5">Login</button>
        <button className=" bg-Brand/Primary text-Neutral/White  pl-5 pr-5 pt-2.5 pb-2.5 flex items-center rounded-md  text-sm not-italic font-medium leading-5">Sign Up</button>
      </div>
    <ul className="flex flex-col text-center gap-1 ">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a  href="">Service</a>
        </li>
        <li>
          <a href="">Feature</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">Testimonial</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
      </div>}
    </header>
  );
};

export default Navbar;
