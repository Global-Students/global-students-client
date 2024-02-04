import {React} from "react";
import AccessToggle from "../Button/AccessToggle";

export default function InfoInput({ index, value, accessbutton }) {

    return (
      <div
      className="group flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[785px] h-[62px] gap-2.5 px-6 py-[9px] rounded-[14px] bg-white border border-[#e7eaf2] focus:outline-none focus:border-[#ff743d] active:border-[#ff743d]"
      style={{ boxShadow: "0px 5px 30px -15px rgba(0,0,0,0.1)" }}
      role="button" tabIndex={0}
    >
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-[227px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1.5">
          <p className="flex-grow-0 flex-shrink-0 w-[81px] h-[29px] text-lg font-semibold text-left text-[#414244] group-focus:text-[#ff743d]">
            {index}
          </p>
          <input className="flex-grow-0 flex-shrink-0 w-[326px] h-[29px] text-lg text-left text-[#808593] outline-none" placeholder={value}/>
        </div>
        {accessbutton && <AccessToggle isPublic />}      </div>
    </div>
    );
}