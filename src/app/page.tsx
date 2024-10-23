"use client";
import Image from "next/image";

import Logo from "@/assets/images/Isolation_Mode.svg";
import Badge from "@/assets/images/badge.svg";
import Polygon from "@/assets/images/polygon.svg";
import img01 from "@/assets/images/01.png";
import img02 from "@/assets/images/02.png";
import img03 from "@/assets/images/03.png";
import img04 from "@/assets/images/04.png";
import img05 from "@/assets/images/05.png";
import img06 from "@/assets/images/06.png";
import img07 from "@/assets/images/07.png";
import img08 from "@/assets/images/08.png";
import img09 from "@/assets/images/09.png";
import img10 from "@/assets/images/10.png";
import img11 from "@/assets/images/11.png";
import img12 from "@/assets/images/12.png";
import File from "@/assets/images/file.svg";
import MediaPalyer from "@/assets/images/media-player.svg";
import Apply from "@/assets/images/apply.svg";
import Humburger from "@/assets/images/humburger.svg";
import Globe from "@/assets/images/globe.svg";
import SelectOption from "./components/select/select";
import useIsMobile from "./hooks/isMobile";

export default function Home() {
  const images = [
    {desc: '', img: img01},
    {desc: '', img: img02},
    {desc: '', img: img03},
    {desc: '', img: img04},
    {desc: '', img: img05},
    {desc: '', img: img06},
    {desc: '', img: img07},
    {desc: '', img: img08},
    {desc: '', img: img09},
    {desc: '', img: img10},
    {desc: '', img: img11},
    {desc: '', img: img12}
  ];
  const options: string[] = [
    '영상 유형 선택',
    '연락 받으실 담당자 성함',
    '영상 유형 선택',
    '영상 연락 받으실 담당자 성함',
    '영상 유형 선택',
    '영상 연락 받으실 담당자 성함 선택',
    '연락 받으실 담당자 성함 유형 선택',
    '영상 유형 선택 연락 받으실 담당자 성함',
  ]
  const rows = [0, 4, 8];
  const ismobile = useIsMobile();

  return (
    <main className="">
      <nav className=" flex justify-between items-center">
        <Image
          src={Logo}
          alt="Next.js logo"
          width={170}
          height={28}
          priority
          className=""
        />
        <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-10">
          <li className="inactive">스튜디오</li>
          <li className="inactive">워크센터</li>
          <li className="inactive">손비서</li>
          <li className="inactive">메타휴먼</li>
          <li>영상제작소</li>
          <li className="inactive">공지사항</li>
          <li className="inactive">제휴문의</li>
        </ul>
        <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-10">
          <li>로그인</li>
          <li>
            <Image
              src={Globe}
              alt="Next.js logo"
              width={40}
              height={20}
              priority
              className=""
            />
          </li>
        </ul>
        <div className="lg:hidden">
          <Image
            src={Humburger}
            alt="burger"
            width={16}
            height={12}
            priority
          />
        </div>
      </nav>
      <div className="jumbotron">
        <Image
          src={Badge}
          alt="Next.js logo"
          width={125}
          height={125}
          className="hidden lg:block badge fixed z-50"
          priority
        />
      </div>

      <div className="lg:min-h-screen second-section flex flex-col justify-center items-center">
        <div className="second-section_content text-center mt-12 lg:mt-36 pb-16">
          <p className="second-section_linear-gradient-font hidden lg:block text-2xl">영상 제작소</p>
          <p className="second-section_title w-3/4 lg:w-full mx-auto text-2xl lg:text-4xl">당장 내일 <br className="lg:hidden" /> <span>고품질 맞춤 영상’</span>‘ 을 받아보세요.</p>

          <div className="flex mt-16 justify-center">
            <div className="second-section_circle">
              <div className="second-section_circle-content">
                <p className="second-section_circle-content-title">FAST</p>
                <p className="second-section_circle-content-desc">X2</p>
              </div>
            </div>
            <div className="second-section_circle">
              <div className="second-section_circle-content">
                <p className="second-section_circle-content-title">QUALITY</p>
                <p className="second-section_circle-content-desc">A++</p>
              </div>
            </div>
            <div className="second-section_circle">
              <div className="second-section_circle-content">
                <p className="second-section_circle-content-title w-24">LOW PRICE</p>
                <p className="second-section_circle-content-desc">1/2</p>
              </div>
            </div>
            <div className="second-section_circle">
              <div className="second-section_circle-content">
                <p className="second-section_circle-content-title w-24">HIGH TECH</p>
                <p className="second-section_circle-content-desc">Gen AI</p>
              </div>
            </div>

          </div>

          <p className="font-bold text-lg lg:text-3xl mt-16">AI VIDEO ON YOUR DEMAND</p>
          <div className="lg:w-2/5 mx-auto">
            <p className="px-5 leading-8 lg:px-0 font-bold text-base lg:text-xl mt-5 opacity-60">
                가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에
                영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다. <br /><br />
                가격은 절반으로, 속도는 두배로, 품질은 A++!
                기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등
                당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.
            </p>
          </div>

          <div className="second-section_content-divider mt-16 mx-auto"></div>

          <div className="mx-auto second-section_content-footer mt-16 relative">
            <p className="text-xl lg:text-5xl font-bold ">PREVIOUS WORKS</p>
            <div className="w-4 h-4 hidden lg:block rounded-full circle-gradient absolute left-0 -top-4">
            </div>
          </div>
        </div>
      </div>
      
      {rows.map((row, i) => (
        <div key={i} className="third-section grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="third-section_img relative w-full h-32 lg:h-64 p-0 m-0">
                <Image
                  src={images[index + row].img}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  className="third-section_img-item"
                />
                <div className="overlay absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60">
                  <div className="text text-white text-lg font-bold">Hovered Text</div>
                </div>
              </div>
            ))}
        </div>
      ))}

      <div className="mt-32 lg:mt-64 lg:container mx-auto min-h-screen">
        <div className="second-section_content-footer mx-auto relative">
          <p className="text-xl text-center lg:text-5xl font-bold ">MAKING PROCESS</p>
          <div className="w-4 h-4 hidden lg:block rounded-full circle-gradient absolute left-0 -top-4">
          </div>
        </div>

        <div className="mt-14 lg:grid lg:grid-cols-2 lg:gap-14">
          <div className="py-16 px-5 lg:px-20 card-service">
            <p className="text-center font-bold text-4xl">
              일반 제작
            </p>
            <p className="mt-4 text-center font-normal text-2xl">
              제작 시작 후 5영업일 이내
            </p>

            <div className="mt-8"></div>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="item-service mt-6 h-22 w-full rounded-2xl lg:rounded-full relative">
                <div className="flex gap-4 items-center lg:gap-12 py-4 px-4 lg:px-12">
                  <div className="">
                    <p className="text-xs lg:text-base item-service_step">STEP{index+1}</p>
                    <p className="item-service_step-desc font-bold text-lg lg:text-xl">사전 논의</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm lg:text-base">영상 제작 문의를 통해 의뢰 확인 후 
                    상담을 통해 방향 설정 및 내용 협의</p>
                  </div>
                </div>
                <div className="absolute w-full -bottom-3 z-50">
                  <Image 
                    src={Polygon}
                    width={29}
                    height={13}
                    alt="polygon"
                    className="mx-auto"
                  />
                </div>
              </div>
            ))}

          </div>
          <div className="py-16 px-20 hidden lg:block card-service-active">
            <div className="z-50">
              <p className="text-center font-bold text-4xl linear-gradient-font">
                Ploonet Quickserve™
              </p>
              <p className="mt-4 text-center font-normal text-2xl">
                제작 시작 후 12~48시간 이내
              </p>

              <div className="mt-14">
                <div className="flex items-center gap-10">
                  <div className="basis-1/3">
                    <div className="w-32 h-32 linear-gradient-background rounded-2xl flex flex-col justify-center items-center">
                      <p className="text-white">STEP1</p>
                      <Image
                        src={File}
                        alt="Next.js logo"
                        width={40}
                        height={50}
                        className="mt-2 text-sm font-normal"
                      />
                    </div>
                  </div>
                  <div className="basis-3/4">
                    <p className="text-2xl font-bold">제작 안내</p>
                    <p className="mt-2 text-lg font-medium">영상 제작 문의를 통해 의뢰 확인 후<br />
                    견적 및 진행 순서 안내</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 -mt-8">
                  <div className="w-32 h-32">
                  </div>
                  <div className="flex-1">
                    <div className="h-px bg-slate-700 w-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-10 -mt-10">
                  <div className="basis-1/3">
                    <div className="w-32 h-32 linear-gradient-background rounded-2xl flex flex-col justify-center items-center">
                      <p className="text-white">STEP2</p>
                      <div className="h-16"></div>
                    </div>
                  </div>
                  <div className="basis-3/4">
                    <p className="text-2xl font-bold">영상 생성</p>
                    <p className="mt-2 text-lg font-medium">스크립트 수신 즉시 가상인간 영상 생성<br />
                    그외 이미지, 배경 음악 등 필요 요소 생성</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 -mt-8">
                  <div className="w-32 h-32">
                  </div>
                  <div className="flex-1">
                    <div className="h-px bg-slate-700 w-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-10 -mt-10">
                  <div className="basis-1/3">
                    <div className="w-32 h-32 linear-gradient-background rounded-2xl flex flex-col justify-center items-center">
                      <p className="text-white">STEP3</p>
                      <Image
                        src={MediaPalyer}
                        alt="Next.js logo"
                        width={40}
                        height={50}
                        className="mt-2 text-sm font-normal"
                      />
                    </div>
                  </div>
                  <div className="basis-3/4">
                    <p className="text-2xl font-bold">편집 및 납품</p>
                    <p className="mt-2 text-lg font-medium">편집 진행, 12~48시간 내 최종본 완성 및 납품</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 -mt-8">
                  <div className="w-32 h-32">
                  </div>
                  <div className="flex-1">
                    <div className="h-px bg-slate-700 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 px-5 lg:hidden">
            <div className="z-50">
              <p className="text-center font-bold text-2xl linear-gradient-font">
                Ploonet Quickserve™
              </p>
              <p className="mt-4 text-center font-normal text-base">
                제작 시작 후 12~48시간 이내
              </p>

              <div className="mt-14 card-service-active">
                <div className="px-5 py-10">
                  <div className="flex items-center gap-8">
                    <div className="basis-1/3">
                      <div className="w-20 h-20 linear-gradient-background rounded-2xl flex flex-col justify-center items-center">
                        <p className="text-white">STEP1</p>
                        <Image
                          src={File}
                          alt="Next.js logo"
                          width={24}
                          height={31}
                          className="mt-2 text-sm font-normal"
                        />
                      </div>
                    </div>
                    <div className="basis-3/4">
                      <p className="text-lg font-bold">제작 안내</p>
                      <p className="mt-2 text-sm font-normal">영상 제작 문의를 통해 의뢰 확인 후<br />
                      견적 및 진행 순서 안내</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 ">
                    <div className="basis-1/3 w-20 h-20">
                    </div>
                    <div className="basis-3/4">
                      <div className="h-px bg-slate-700 w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 ">
                    <div className="basis-1/3">
                      <div className="w-20 h-20 linear-gradient-background rounded-2xl flex flex-col justify-center items-center">
                        <p className="text-white">STEP2</p>
                        <div className="h-16 w-20"></div>
                      </div>
                    </div>
                    <div className="basis-3/4">
                      <p className="text-lg font-bold">영상 생성</p>
                      <p className="mt-2 text-sm font-normal">스크립트 수신 즉시 가상인간 영상 생성<br />
                      그외 이미지, 배경 음악 등 필요 요소 생성</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 ">
                    <div className="basis-1/3 w-20 h-20">
                    </div>
                    <div className="basis-3/4">
                      <div className="h-px bg-slate-700 w-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-8">
                    <div className="basis-1/3">
                      <div className="w-20 h-20 linear-gradient-background rounded-2xl flex flex-col justify-center items-center">
                        <p className="text-white">STEP3</p>
                        <Image
                          src={MediaPalyer}
                          alt="Next.js logo"
                          width={24}
                          height={31}
                          className="mt-2 text-sm font-normal"
                        />
                      </div>
                    </div>
                    <div className="basis-3/4">
                      <p className="text-lg font-bold">편집 및 납품</p>
                      <p className="mt-2 text-sm font-normal">편집 진행, 12~48시간 내 최종본 완성 및 납품</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 ">
                    <div className="basis-1/3 w-20 h-20">
                    </div>
                    <div className="basis-3/4">
                      <div className="h-px bg-slate-700 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 px-5 text-center">
          <p className="text-gray-500 text-xs lg:text-sm font-normal">  * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등 전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다. <br />
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.</p>
        </div>
      </div>

      <div className="px-5 mt-32 lg:mt-72 lg:container mx-auto min-h-screen">
        <div className="text-center">
          <p className="font-bold text-lg lg:text-2xl linear-gradient-font">영상 제작 문의</p>
          <p className="font-bold text-2xl lg:text-5xl mt-4">영상 제작이 필요하다면,<span className="font-normal">지금 문의 주세요.</span></p>
          <p className="mt-16 text-base lg:text-2xl text-slate-400">여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 <br />
          즉시 연락 드리겠습니다.</p>
          <div className="mt-10 text-base lg:text-lg text-slate-400">henry.lim@saltlux.com</div>
        </div>
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <SelectOption options={options} className="w-full lg:w-3/5 h-16 rounded-lg form-input px-8"/>
            </div>
            <input type="text" className="w-full lg:w-3/5 h-16 rounded-lg form-input px-8 mt-5" placeholder="연락 받으실 담당자 성함" />
            <input type="text" className="w-full lg:w-3/5 h-16 rounded-lg form-input px-8 mt-5" placeholder="이메일" />
            <input type="text" className="w-full lg:w-3/5 h-16 rounded-lg form-input px-8 mt-5" placeholder="휴대폰 번호" />
            <textarea 
              className="w-full lg:w-3/5 h-64 rounded-lg form-input p-8 mt-5" 
              placeholder={`의뢰하실 영상내용 \n아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요.\n\n고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등\n영상 장르 : 홍보,프로모션/IR/프레젠테이션 등\n내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.`
              }
            />
            <input type="text" className="w-full lg:w-3/5 h-16 rounded-lg form-input px-8 mt-5" placeholder="참고 영상" />
            <p className="mt-16 lg:mt-4 text-xs lg:text-lg text-orange-600">* 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.</p>

            <div className="mt-24 w-full lg:w-3/5 pb-64 flex flex-col gap-16 lg:gap-0 lg:flex-row lg:justify-between">
              <div className="flex gap-4 text-left items-center">
                <Image
                  src={Apply}
                  alt="Next.js logo"
                  width={28}
                  height={28}
                  priority
                />
                <p className="text-sm lg:text-xl leading-4 lg:leading-8 font-normal text-gray-500"><span className="underline">개인정보처리방침</span>에 동의합니다.</p>
              </div>
              <button className="btn-submit text-xl font-bold rounded">문의 보내기</button>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
}
