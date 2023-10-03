import { FC } from "react";

interface className {
  name: string;
}

const MainTechCalendarCard: FC<className> = (props) => {
  return (
    <div>
      <button className="rounded-md border border-trueGray-300 px-3 py-2 text-lg">
        {props.name}
      </button>
    </div>
  );
};

export default MainTechCalendarCard;
