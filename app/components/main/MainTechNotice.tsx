import Image from "next/image";
import { FC } from "react";

const MainTechNotice: FC = () => {
  return (
    <div className="mt-5  bg-[#F0F4FA] ">
      <div className="h-full md-container p-4 bg-contain bg-right bg-no-repeat bg-[url('/images/notice_02.png')] px-4">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-[#072C56] text-[16px] mb-2 font-semibold">
            테킷 스쿨 사전알림
          </h3>
          <p className="mb-4 text-[24px] font-bold">
            기다리는 스쿨이 있으신가요?
            <br />
            가장 먼저 오픈 소식을 보내드릴게요.
          </p>
        </div>
        <button className="text-[14px]">더 알아보기 &gt;</button>
      </div>
    </div>
  );
};

export default MainTechNotice;
