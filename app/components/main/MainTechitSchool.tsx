import { FC } from "react";
import MainTechitSchoolCard from "./MainTechSchoolCard";
import techSchoolCardData from "@/app/data.json";

const MainTechitSchool: FC = () => {
  return (
    <div className="md-container mt-10 md:mt-20">
      <h2 className="text-main font-semibold mb-2">KDT 테킷 스쿨 알아보기</h2>
      <div className="font-bold text-[26px]">
        전액 지원받고 기초부터 심화까지 한 큐에 성장
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-tech-black-200">
          체계적인 커리큘럼을 가진 스쿨들을 만나보세요!
        </div>
        <button className="text-sm font-semibold">자세히 보기&gt; </button>
      </div>
      <ul className="mt-8 md:mt-10 grid md:grid-cols-2 justify-items-center gap-8">
        {techSchoolCardData.map((v, i) => {
          return <MainTechitSchoolCard key={i} {...v} />;
        })}
      </ul>
    </div>
  );
};

export default MainTechitSchool;
