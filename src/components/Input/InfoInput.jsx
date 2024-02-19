import React, {useEffect, useRef, useState} from "react";
import AccessToggle from "../Button/AccessToggle";

export default function InfoInput({ index, value, accessbutton }) {
  const InputRef = useRef();
  const [ClickStyle, setClickStyle] = useState("flex flex-col justify-center w-[785px] h-[62px] px-6 py-[9px] rounded-[14px] bg-white border border-[#e7eaf2]");
  const [TextStyle, setTextStyle] = useState("w-[81px] h-[29px] text-lg font-semibold text-left text-[#414244]");
  function handleClick() {
    setClickStyle("flex flex-col justify-center w-[785px] h-[62px] px-6 py-[9px] rounded-[14px] bg-white border border-[#ff743d]");
    setTextStyle("w-[81px] h-[29px] text-lg font-semibold text-left text-[#ff743d]");
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (InputRef.current && !InputRef.current.contains(event.target)) {
        setClickStyle("flex flex-col justify-center w-[785px] h-[62px] px-6 py-[9px] rounded-[14px] bg-white border border-[#e7eaf2]");
        setTextStyle("w-[81px] h-[29px] text-lg font-semibold text-left text-[#414244]");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

    return (
      <button
      ref={InputRef}
      onMouseDown={handleClick}
      type="button"
      tabIndex={0}
      className={ClickStyle}
      style={{ boxShadow: "0px 5px 30px -15px rgba(0,0,0,0.1)" }}
    >
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-[227px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1.5">
          <p className={TextStyle}>
            {index}
          </p>
          <input className="flex-grow-0 flex-shrink-0 w-[326px] h-[29px] text-lg text-left text-[#808593] outline-none" placeholder={value}/>
        </div>
        {accessbutton && <AccessToggle isPublic />}      </div>
    </button>
    );
}