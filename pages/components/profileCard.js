import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ProfileCard({ name,img,proffession,desc,followers,rating,price }) {
    return(
        <a href="#">
        <div className="w-30 cardcont flex items-stretch border-black border-[1px] rounded-[10px] cursor-pointer hover:shadow-md">
            <Image src={img} alt={name} width={165} height={300}/>
            <div className="flex flex-col items-center justify-center p-5 select-none">
                <div className="p-4">
                    <p className=" text-3xl font-bold">{name}</p>
                    <p className="text-xs">{proffession}</p>
                </div>

                <div className="p-2 text-sm font-bold">
                    <p>{desc}</p>
                    <p>{followers} Followers</p>
                </div>

                <div className="flex justify-between">
                    <div className="p-5">
                        <p className="text-xs">Ratings</p>
                        <div className="text-sm flex font-bold"><FaStar className="text-lg text-yellow-500 mr-1"/>{rating}</div>
                    </div>
                    <div className="p-5">
                        <p className="text-xs">Starting At</p>
                        <p className="text-sm font-bold">{price}</p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    );
}