import React from 'react';

export default function FancyButton({ children = "Contact Me"}) {
  return (
    <div
      className="group relative float-right m-0 inline-block cursor-pointer box-border bg-transparent p-[1.25em_2em] text-center no-underline outline-none select-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white text-[13px] font-bold tracking-wider border-2 border-black"
    >
      <span className="absolute left-[1.5em] top-1/2 h-0.5 w-6.25 -translate-y-1/2 bg-black transition-all duration-300 ease-linear group-hover:w-3.75 group-hover:bg-white"></span>
      <span className="absolute left-[2.5px] -top-0.5 h-0.5 w-6.25 bg-[#e8e8e8] transition-all duration-500 ease-out group-hover:-left-0.5 group-hover:w-0"></span>

      <span className="block text-left text-[1.125em] uppercase leading-[1.33333em] text-black no-underline pl-[2em] transition-all duration-300 ease-in-out group-hover:pl-[1.5em] group-hover:text-white">
        {children}
      </span>
      <span className="absolute -bottom-0.5 right-7.5 h-0.5 w-6.25 bg-[#e8e8e8] transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
      <span className="absolute -bottom-0.5 right-7.5 h-0.5 w-2.5 bg-[#e8e8e8] transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
    </div>
  );
}