import { NextPage } from "next";
import MainBanner from "./components/main/MainBanner";
import MainTechitSchool from "./components/main/MainTechitSchool";
import MainTechNotice from "./components/main/MainTechNotice";
import MainTechCalendar from "./components/main/MainTechCalendar";
import MainEduType from "./components/main/MainEduType";

const Home: NextPage = () => {
  return (
    <div>
      <MainBanner />
      <MainTechitSchool />
      <MainTechNotice />
      <MainTechCalendar />
      <MainEduType />
    </div>
  );
};

export default Home;
