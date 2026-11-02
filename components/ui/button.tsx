


export default function button() {
  return (
    <button className="relative h-[50px] px-[30px] border-2 border-black bg-[#e8e8e8] select-none whitespace-nowrap transition-all duration-[50ms] linear font-inherit hover:cursor-crosshair active:scale-[0.95] before:content-[''] before:absolute before:bg-[#e8e8e8] before:transition-all before:duration-200 before:linear before:w-[calc(100%+6px)] before:h-[calc(100%-16px)] before:top-[8px] before:left-[-3px] hover:before:h-[calc(100%-32px)] hover:before:top-[16px] after:content-[''] after:absolute after:bg-[#e8e8e8] after:transition-all after:duration-200 after:linear after:w-[calc(100%-16px)] after:h-[calc(100%+6px)] after:top-[-3px] after:left-[8px] hover:after:w-[calc(100%-32px)] hover:after:left-[16px]">
        <span className="text-[15px] z-3 relative font-semibold">
            CONTACT ME
        </span>
    </button>
  )
}