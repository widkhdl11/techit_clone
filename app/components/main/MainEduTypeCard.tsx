import { FC, useEffect, useState } from "react";

interface eduData {
  name: string;
  imgSrc: string;
  description: string;
}

const MainEduTypeCard: FC<eduData> = (props) => {
  return (
    // <a
    //   href="#"
    //   className={`flex flex-col justify-start items-start
    //   p-[30px] rounded-2xl w-[45%] bg-right bg-cover
    //   bg-[url('./images/${props.imgSrc}')] h-[310px]`}
    // >
    //   <div className={`w-1/2 text-left`}>
    //     <h3 className="text-tech-black-300 text-[24px] font-bold">
    //       {props.name}
    //     </h3>
    //     <p className="text-tech-black-200  text-[16px]">{props.description}</p>
    //     <button className="text-tech-black-100 text-[14px] mt-4">
    //       더 알아보기 &gt;
    //     </button>
    //   </div>
    // </a>
    <div>abc</div>
  );
};

export default MainEduTypeCard;
