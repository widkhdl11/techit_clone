import Image from "next/image";
import { FC } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Header: FC = () => {
  return (
    <header className="border-b ">
      <div
        className="md-container 
      font-semibold 
      flex justify-between
      py-5"
      >
        <div className="flex">
          <Image
            src="/images/techit_logo.svg"
            alt="logo"
            width={108}
            height={16}
            className="mx-6"
          />
          <ul className="text-tech-black-300 md:flex gap-4 hidden px-4">
            <li>테킷 스쿨</li>
            <li>온보딩 트랙</li>
            <li>스타트업 스테이션</li>
            <li>이벤트</li>
            <li>기업 해커톤</li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="text-tech-black-200 mx-4">로그인</button>
          <RxHamburgerMenu className="flex md:hidden mx-2" size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
