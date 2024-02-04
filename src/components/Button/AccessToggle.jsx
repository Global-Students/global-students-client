import React from "react";

export default function AccessToggle({ isPublic }) {
    return (
        <div className="group flex flex-grow-0 flex-shrink-0 w-28 relative overflow-hidden gap-[3px] px-7 py-3 rounded-[9px] bg-neutral-100 hover:bg-[#ffa77b]/25">
                    <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#808593] group-hover:text-[#ffa77b]">
                      {isPublic ? "공개" : "비공개"}
                    </p>
                    <img src={isPublic ? "/assets/unlock_hover.svg" : "/assets/lock_hover.svg"} alt="icon" className="absolute right-7 invisible group-hover:visible"/>
                    <img src={isPublic ? "/assets/unlock.svg" : "/assets/lock.svg"} alt="icon"  className="absolute right-7 visible group-hover:invisible"/>
                  </div>
    );
}