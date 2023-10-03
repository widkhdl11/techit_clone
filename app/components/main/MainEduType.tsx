import { FC } from "react";
import techEduData from "@/app/eduData.json";
import MainEduTypeCard from "./MainEduTypeCard";

const MainEduType: FC = () => {
  return (
    <div className="md-container lg:mb-40 lg:px-6 mb-20 mt-10 max-w-screen-lg">
      <div className="md-container">
        <h3 className="text-main text-[16px] mb-2">모든 교육 경험</h3>
        <p className="text-tech-black-300 font-bold text-[26px]">
          테킷이 두드리는 새로운 교육
        </p>
        <p className="text-tech-black-100 text-[16px]">
          성장을 위해 필요한 모든, 새로운 교육을 만나보세요.
        </p>
      </div>
      <div className="mt-10 w-full">
        <div className=" flex flex-row justify-between flex-wrap gap-y-8">
          {techEduData.map((v, i) => {
            return <MainEduTypeCard key={i} {...v} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainEduType;
