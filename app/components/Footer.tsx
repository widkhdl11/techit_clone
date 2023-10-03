import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="border-t border-gray-300 h-96">
      <div className="md-container px-6 py-8">
        <div className="flex justify-between items-start">
          <a href="#">
            <Image
              src={"/images/footer_logo.svg"}
              alt="footer_img"
              width={133}
              height={38}
            />
          </a>

          <div className="text-tech-back-300 flex space-x-6">
            <div className="">
              <h3 className="text-[12px] text-tech-back-100">모든 교육 경험</h3>
              <ul className="text-[14px] font-semibold mt-4 space-y-3">
                <li>KDT 테킷 스쿨</li>
                <li>온보딩 트랙</li>
                <li>스타트업 스테이션</li>
                <li>이벤트</li>
                <li>기업 해커톤</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-[12px] text-tech-back-100">회사 소개</h3>
              <ul className="text-[14px] font-semibold mt-4 space-y-3">
                <li>KIKELION</li>
                <li>채용</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-5 w-full border-gray-300 lg:mt-8"></hr>
        <div className="flex flex-col text-[12px] text-tech-black-100 mt-4">
          <span className=" space-x-2 space-y-0.5 text-xs">
            이용약관 개인정보처리방침 환불규정
          </span>
          <div className="mt-3">
            <span className=" space-x-2 space-y-0">
              상호명: 멋쟁이사자처럼대표: 이두희contact@likelion.net 사업자 번호
              : 264-88-01106 통신판매업 신고번호 : 2019-서울강남-00774{" "}
            </span>
            <span className="mt-0.5 space-x-2 space-y-0">
              주소 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층
              Copyright © 2022 멋쟁이사자처럼 All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
