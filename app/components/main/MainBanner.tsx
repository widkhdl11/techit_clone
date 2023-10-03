import { FC } from "react";
import Image from "next/image";

const MainBanner: FC = () => {
  return (
    <div className="bg-red-100 h-[400px] flex relative ">
      <div
        className="z-10 pl-8 flex flex-col justify-center items-start 
        md-container
        w-full
        "
      >
        {/* justify-center : flex의 진행 방향에 따른 정렬*/}
        <h3 className="font-bold text-2xl">TECHIT 카카오톡 채널 추가 이벤트</h3>
        <div className="text-sm mt-2">
          개발자 성장에 필요한 모든 것이 담긴 시크릿 페이지 제공
        </div>
      </div>
      <Image
        className="object-cover absolute w-full h-full"
        //   absolute : 부모의(relative)를 위치를 기준으로 위치를 고정
        src="/images/banner.png"
        alt="banner"
        width={3840}
        height={800}
      />
    </div>
  );
};

export default MainBanner;
