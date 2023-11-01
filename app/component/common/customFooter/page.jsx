import { footerMainTopics } from "@/lib/customFooter";
import Image from "next/image";

const imagePath=[
  {
    id:1,
    img:'/component/hompage/facebook.svg'
  },
  {
    id:2,
    img:'/component/hompage/facebook.svg'
  },
  {
    id:3,
    img:'/component/hompage/facebook.svg'
  },
  {
    id:4,
    img:'/component/hompage/facebook.svg'
  },
]

const CustomFooter = () => {
  return (
    <div className=" h-full w-full ">
      <div className="bg-black w-full h-64 min-w-max">
        <div className="p-5 pl-10 pr-10 flex justify-between">
          <div className="flex flex-col gap-4">
            <div
              className="bg-white w-[160px] h-[90px] pl-2 "
              style={{ borderRadius: "8px" }}
            >
              <Image
                src="https://www.manipalcommunityconnect.in/images/logo.svg"
                width={150}
                height={300}
                alt="manipal community logo"
              />
            </div>

            <div className="flex flex-col">
              <small className="text-white text-base">
                98, HAL Old Airport Rd, Kodihalli,
              </small>
              <small className="text-white text-base">Karnataka 560017</small>
            </div>
            <div className="flex">
              {imagePath.map((item)=>(
               <div key={item.id} >
                <Image src={item.img} width={50} height={50} alt="footer logo" className="bg-white" />
               </div> 
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {footerMainTopics.map((item) => (
              <div key={item.id}>
                <p className={`text-white`}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-blue-700 w-full h-8 flex justify-evenly items-center">
        <div className="flex gap-4">
          <small className="text-white font-semibold text-sm ">Copyright</small>
          <small className="text-white font-semibold text-sm">
            2022 Manipal Hospitals - All Rights Reserved
          </small>
        </div>
        <div className="flex gap-6">
          <small className="text-white font-semibold text-sm">CSR Policy</small>
          <small className="text-white font-semibold text-sm">Disclaimer</small>
          <small className="text-white font-semibold text-sm">
            Privacy Policy
          </small>
          <small className="text-white font-semibold text-sm">
            Terms & Conditions
          </small>
        </div>
      </div>
    </div>
  );
};
export default CustomFooter;
