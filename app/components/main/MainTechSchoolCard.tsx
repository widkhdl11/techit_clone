"use client";

import Image from "next/image";
import { FC, useState } from "react";

interface MainTechSchoolCardProps {
  dDay: string;
  name: string;
  imgSrc: string;
  description: string;
  recruitment?: string;
}

const MainTechitSchoolCard: FC<MainTechSchoolCardProps> = (props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onEnterImage = () => {
    setIsHover(true);
  };

  const onLeaveImage = () => {
    setIsHover(false);
  };

  return (
    <button
      onMouseEnter={onEnterImage}
      onMouseLeave={onLeaveImage}
      className="w-[290px]  flex flex-col"
    >
      <div className="w-[290px] h-[222px] overflow-hidden rounded-xl">
        <Image
          className={`rounded-xl ${
            isHover && "scale-110 transition duration-500"
          } hover:transition-transform-0.5`}
          src={`/images/${props.imgSrc}`}
          alt={props.name}
          width={290}
          height={222}
        />
      </div>
      <div
        className={`border rounded-md px-2 py-1 font-semibold text-sm mt-4
      ${props.dDay === "마감임박 D-2" && "text-[#1d4ed8] border-[#1d4ed8] "}
      ${props.dDay === "사전알림신청" && "text-[#059669] border-[#059669]"}
      ${props.dDay === "모집마감" && "text-[#3f3f46] border-[#3f3f46]"}
      
      `}
      >
        {props.dDay}
      </div>
      <div className="text-xl mt-4 mb-2 font-semibold">{props.name}</div>
      <div className="text-left">{props.description}</div>
      {props.recruitment && (
        <div className="mt-4 text-tech-black-100">{props.recruitment}</div>
      )}
    </button>
  );
};

export default MainTechitSchoolCard;
