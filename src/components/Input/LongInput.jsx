import React, {useEffect, useRef, useState} from "react";

export default function LongInput({ index, value }) {
  const InputRef = useRef();
  const [ClickStyle, setClickStyle] = useState("pl-6 pr-[9px] py-[9px] rounded-[14px] border bg-neutral-100 border-[#e7eaf2]");
  function handleClick() {
    setClickStyle("pl-6 pr-[9px] py-[9px] rounded-[14px] border bg-[#ffa77b]/25 border-[#ffa77b]");
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (InputRef.current && !InputRef.current.contains(event.target)) {
        setClickStyle("pl-6 pr-[9px] py-[9px] rounded-[14px] border bg-neutral-100 border-[#e7eaf2]");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

    return(
        <button ref={InputRef} onMouseDown={handleClick} type="button" tabIndex={0} className={ClickStyle}>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-9">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-3">
            <p className="flex-grow-0 flex-shrink-0 w-[47px] h-[21px] text-lg text-left text-[#1e1e1e]">
              {index}
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[668px] h-[130px] relative overflow-hidden gap-2.5 pl-[27px] pr-[505px] pt-3 pb-[97px] rounded-lg bg-white border border-[#e7eaf2]">
            <input className="flex-grow-0 flex-shrink-0 w-[165px] h-[21px] text-lg font-light text-left text-[#b7becf] outline-none" placeholder={value} />
          </div>
        </div>
      </button>
    );
}