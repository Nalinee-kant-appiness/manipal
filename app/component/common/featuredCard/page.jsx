"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from 'next/navigation';
const FeaturedCard=({data})=>{
    const router=useRouter()
return (
    <div className="w-full h-full ">
    <div className="flex gap-8">
        {data?.map((item)=>(
        <div className="bg-white w-[420px] h-[500px] rounded-t-2xl" key={item.id}>
            <div className="rounded-3xl">
                <Image src={item.img} width={420} height={200} onClick={()=>router.push(item.routeLink)} className="rounded-t-2xl cursor-pointer" alt={`${item.alt}`}/>
            </div>
            <div>
                <div className="flex flex-col p-5 gap-7">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-semibold text-blue-800">{item.name}</h3>
                        <div className="flex gap-2">
                            <small>{item.message}</small>
                            <small>{item.psotedDate}</small>
                        </div>
                    </div>
                    <div>
                        <h3 className="underline text-green-700 font-semibold">{item.type}</h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button onClick={()=>router?.push(item.routeLink)} className="w-[120px] h-[45px] bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-2 px-4 rounded">View</Button>
                </div>
            </div>
        </div>
        ))}
        </div>
       
    </div>
)
}
export default FeaturedCard;