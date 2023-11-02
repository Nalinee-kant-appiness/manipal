"use client";
import FeaturedCard from "@/app/component/common/featuredCard/page";
import { Button } from "@/components/ui/button";
import {
  blogsData,
  catagoriesOfMedicine,
  featuredCardData,
  medicalTales,
  trendingDiscussionData,
} from "@/lib/homePage";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full">
      <div>
        <Image
          src="https://www.manipalcommunityconnect.in/_next/image?url=https%3A%2F%2Fmhcp-prod.s3.us-west-2.amazonaws.com%2Fbanners%2F646aee29c82e76b64d96f9a4%2Fimage.png&w=1920&q=90"
          className="w-full min-w-[1360px]"
          width={500}
          height={200}
          alt="hospital image"
        />
      </div>
      <div className="pl-10 pt-10 w-full h-[680px] bg-blue-300 flex flex-col min-w-max">
        <h2 className="text-white text-4xl font-semibold pb-10">Featured</h2>
        <FeaturedCard data={featuredCardData} />
      </div>
      <div className="flex gap-4 pt-10 pl-10">
        {catagoriesOfMedicine.map((item) => (
          <div
            onClick={() => router.push(item.routeLink)}
            key={item.id}
            className="w-[150px] h-[120px] flex items-center justify-center bg-[#14b8a6] text-center hover:bg-[#14b8a6] rounded-xl font-semibold text-white cursor-pointer px-5"
          >
            {item.name}
          </div>
        ))}
        <div
          onClick={() =>
            router.push(
              "https://www.manipalcommunityconnect.in/specialities/all"
            )
          }
          className="w-[150px] h-[120px] border border-[#14b8a6] flex items-center justify-center rounded-xl font-semibold text-[#14b8a6] cursor-pointer px-5 min-w-max"
        >
          View All
        </div>
      </div>
      <div className=" p-10">
        <h1 className="text-4xl text-black font-bold min-w-max pb-10">
          Trending Discussions
        </h1>
        <div className=" w-full h-full flex flex-wrap gap-6 min-w-[1332px]">
          {trendingDiscussionData.map((item) => (
            <div className="flex gap-3 w-[614px]" key={item.id}>
              <div>
                <Image
                  src={item.img}
                  width={500}
                  height={330}
                  className="rounded-xl h-60 cursor-pointer"
                  alt="trending disscussion image"
                  onClick={() =>
                    router.push(
                      item.routeLink
                    )
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="w-96 truncate overflow-ellipsis font-semibold text-xl text-blue-800">
                  {item.heading}
                </h2>
                <div className="flex gap-5">
                  <small>{item.updateKey}</small>
                  <small>{item.updateValue}</small>
                </div>
                <p className="w-[300px] text-sm text-gray-500">
                  {item.discussion}
                </p>
                <div className="flex gap-2">
                  <Image
                    src="/component/hompage/community.svg"
                    width={25}
                    height={25}
                    alt="community icon"
                  />
                  <p>{`${item.noOfParticipant} participant`}</p>
                  <Image
                    src="/component/hompage/connect.svg"
                    width={20}
                    height={20}
                    alt="connection icon"
                  />
                </div>
                <Button
                  onClick={() =>
                    router.push(
                      "https://www.manipalcommunityconnect.in/forum/healthy-brain-corresponds-to-a-healthy-heart-the-heart-of-living-healthy"
                    )
                  }
                  className="w-36 h-10 bg-gradient-to-r from-blue-600 to-green-600 font-semibold text-base text-white rounded-xl hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600"
                >
                  Join Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10 pb-10">
          <Button
            onClick={() =>
              router.push(
                "https://www.manipalcommunityconnect.in/forum/trending?search="
              )
            }
            className="w-44 h-12 bg-white border border-blue-800 font-semibold text-blue-800 text-lg rounded-xl hover:bg-blue-600 hover:text-white"
          >
            View All
          </Button>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-4xl text-black font-bold min-w-max pb-10">Blogs</h1>
        <div className="flex flex-wrap gap-6 min-w-max">
          {blogsData.map((item) => (
            <div className="flex flex-col w-[300px]" key={item.id}>
              <div>
                <Image
                  src="https://mhcp-prod.s3.us-west-2.amazonaws.com/posts/645e97b35f42135f2145048f/blog.webp"
                  width={300}
                  height={300}
                  alt="blogs image"
                  className="cursor-pointer"
                  onClick={() => router.push(item.routeLink)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://mhcp-prod.s3.us-west-2.amazonaws.com/user/645e66d55f42135f2144ede8/profile_1683918542686.webp"
                    width={30}
                    height={30}
                    alt="Manipal hospital icon"
                  />
                  <div>
                    <p className="font-semibold text-black text-base">
                      Manipal Hospitals
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <small className="text-xs">POSTED ON</small>
                  <small className="text-xs">MAY 12 2023</small>
                </div>
                <div>
                  <h2 className="w-72 truncate overflow-ellipsis font-semibold text-xl text-blue-800">
                    {item.heading}
                  </h2>
                </div>

                <div className="mt-3 mb-3">
                  <p className="w-[300px] text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
                <div>
                  <p
                    onClick={() => router.push(item.routeLink)}
                    className="underline text-green-600 cursor-pointer"
                  >
                    Read More
                  </p>
                </div>
                <div className="flex">
                  <div className="flex gap-2">
                    <p>{item.noOfMessages}</p>
                    <Image
                      src="/component/hompage/message.svg"
                      width={18}
                      height={18}
                      alt="message icon"
                    />
                  </div>
                  <div className="flex gap-2 ml-2">
                    <p>{item.noOfconnection}</p>
                    <Image
                      src="/component/hompage/connect.svg"
                      width={18}
                      height={18}
                      alt="message icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10 pb-10">
          <Button
            onClick={() =>
              router.push("https://www.manipalcommunityconnect.in/blog?search=")
            }
            className="w-44 h-12 bg-white border border-blue-800 font-semibold text-blue-800 text-lg rounded-xl hover:bg-blue-600 hover:text-white"
          >
            View All
          </Button>
        </div>
      </div>

      <div className=" w-full h-[800px] p-10 bg-gray-100 mb-10 min-w-[1332px]">
        <h1 className="text-4xl text-black font-bold min-w-max pb-10">
          Medical Tales
        </h1>

        <div className=" w-full h-[600px] flex flex-wrap gap-6">
          {medicalTales.map((item) => (
            <div className="flex gap-3 w-[614px]" key={item.id}>
              <div>
                <Image
                  src={item.img}
                  width={500}
                  height={330}
                  className="rounded-xl h-60 cursor-pointer min-w-[100px]"
                  alt="trending disscussion image"
                  onClick={() => router.push(item.routeLink)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://mhcp-prod.s3.us-west-2.amazonaws.com/user/645e66d55f42135f2144ede8/profile_1683918542686.webp"
                    width={30}
                    height={30}
                    alt="Manipal hospital icon"
                  />
                  <div>
                    <p className="font-semibold text-black text-base">
                      Manipal Hospitals
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <small className="text-xs">POSTED ON</small>
                  <small className="text-xs">MAY 12 2023</small>
                </div>
                <div>
                  <h2 className="w-72 truncate overflow-ellipsis font-semibold text-xl text-blue-800">
                    {item.heading}
                  </h2>
                </div>

                <div className="mt-3 mb-3">
                  <p className="w-[300px] text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
                <div>
                  <p
                    onClick={() => router.push(item.routeLink)}
                    className="underline text-green-600 cursor-pointer"
                  >
                    Read More
                  </p>
                </div>
                <div className="flex">
                  <div className="flex gap-2">
                    <p>{item.noOfMessages}</p>
                    <Image
                      src="/component/hompage/message.svg"
                      width={18}
                      height={18}
                      alt="message icon"
                    />
                  </div>
                  <div className="flex gap-2 ml-2">
                    <p>{item.noOfconnections}</p>
                    <Image
                      src="/component/hompage/connect.svg"
                      width={18}
                      height={18}
                      alt="message icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
          <Button
            onClick={() =>
              router.push(
                "https://www.manipalcommunityconnect.in/medical?search="
              )
            }
            className="w-44 h-12 bg-white border border-blue-800 font-semibold text-blue-800 text-lg rounded-xl hover:bg-blue-600 hover:text-white"
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
