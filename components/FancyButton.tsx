import React from 'react';

export default function FancyButton({ href = "#", children = "Contact Me"}) {
  return (
    <a
      href={href}
      className="group relative float-right m-0 inline-block cursor-pointer box-border bg-transparent p-[1.25em_2em] text-center no-underline outline-none select-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white text-[13px] font-bold tracking-[0.05em] border-2 border-black"
    >
      {/* Pseudo-elemento ::before animado */}
      <span className="absolute left-[1.5em] top-1/2 h-[2px] w-[1.5625rem] -translate-y-1/2 bg-black transition-all duration-300 ease-linear group-hover:w-[0.9375rem] group-hover:bg-white"></span>

      {/* Borde superior decorativo */}
      <span className="absolute left-[2.5px] top-[-2px] h-[2px] w-[1.5625rem] bg-[#e8e8e8] transition-all duration-500 ease-out group-hover:left-[-2px] group-hover:w-0"></span>

      {/* Texto principal */}
      <span className="block text-left text-[1.125em] uppercase leading-[1.33333em] text-black no-underline pl-[2em] transition-all duration-300 ease-in-out group-hover:pl-[1.5em] group-hover:text-white">
        {children}
      </span>

      {/* Borde inferior decorativo 1 */}
      <span className="absolute bottom-[-2px] right-[1.875rem] h-[2px] w-[1.5625rem] bg-[#e8e8e8] transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>

      {/* Borde inferior decorativo 2 */}
      <span className="absolute bottom-[-2px] right-[0.625rem] h-[2px] w-[0.625rem] bg-[#e8e8e8] transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
    </a>
  );
}