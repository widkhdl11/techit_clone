import { FC } from "react";
import MainTechCalendarCard from "./MainTechCalendarCard";
import techClassData from "@/app/classData.json";

const MainTechCalendar: FC = () => {
  return (
    <div className="md-container lg:mb-40 lg:px-6 mb-20 mt-10">
      <div>
        <h3 className="text-main text-[16px]">테킷 스쿨 일정 확인하기</h3>
        <p className="text-tech-black-300 font-bold text-[26px]">
          한 눈에 보는 테킷 스쿨 오픈 일정
        </p>
      </div>
      <div>
        <div>
          <button className="text-[20px]  font-bold text-tech-black-100 hover:text-[#E67800] hover:underline hover:underline-offset-8  p-5">
            클래스별
          </button>
          <button className="text-[20px] font-bold text-tech-black-100 hover:text-[#E67800] hover:underline hover:underline-offset-8  p-5">
            월별로 보기
          </button>
        </div>
        <div className="bg-gray-50 lg:rounded-2xl lg:px-6 lg:py-8">
          <p className="font-bold text-5">관심있는 클래스를 선택해주세요.</p>
          <div className="py-6 px-6 mt-6 rounded-2xl border border-gray-300 bg-white flex flex-wrap gap-4">
            {techClassData.map((v, i) => {
              return <MainTechCalendarCard key={i} {...v} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTechCalendar;
