import Image from "next/image";
import { RiCoinsLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";
import { LuLogOut, LuShieldCheck } from "react-icons/lu";
import { CiBank } from "react-icons/ci";

export default function ProfileOptions({details,type}) {
    //Add the details of the profile as Object
    //Object should contain - name,image(image src),proffession,coins,bills

    return(
        <div className="bg-gray-100 rounded-lg p-2 select-none" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-blue-500 scroll-hide rounded-lg p-2 justify-between">
                <div className="flex flex-wrap">
                    <Image className="p-2" src={details.image}  width={100} height={100}/>
                    <div className="p-3 text-white mr-3">
                        <p className="text-xl font-bold">{details.name}</p>
                        <p className="text-xs">{details.proffession}</p>
                    </div>
                    {(type=="Influencer")?(
                    <div className="flex gap-2 h-8 mt-5 mr-2">
                        <div className="flex text-sm bg-white rounded-2xl p-1"><RiCoinsLine className="m-1"/><p>{details.coins}</p></div>
                        <div className="flex text-sm bg-white rounded-2xl p-1"><GiMoneyStack className="m-1"/><p>{details.bills}</p></div>
                    </div>):(<div></div>)}
                </div>
            </div>
            <div className="bg-white rounded-md mt-2">
                <a href="#">
                    <div className="flex p-2 hover:bg-gray-100">
                        <RiAccountCircleLine className="text-[70px] text-blue-400 bg-gray-100 rounded-xl"/>
                        <div className="p-2">
                            <p className="text-lg">My Account</p>
                            <p className="text-xs text-gray-500">Make changes to your account</p>
                        </div>
                    </div>
                </a>
                <hr/>
                <a href="#">
                    <div className="flex p-2 hover:bg-gray-100">
                        <CiCalendar className="text-[70px] text-blue-400 bg-gray-100 rounded-xl"/>
                        <div className="p-2">
                            <p className="text-lg">History</p>
                            <p className="text-xs text-gray-500">Check your previous activities</p>
                        </div>
                    </div>
                </a>
                <hr/>
                <a href="#">
                    <div className="flex p-2 hover:bg-gray-100">
                        <LuShieldCheck className="text-[70px] text-blue-400 bg-gray-100 rounded-xl"/>
                        <div className="p-2">
                            <p className="text-lg">Two-Factor Authentication</p>
                            <p className="text-xs text-gray-500">Further secure your account for safety</p>
                        </div>
                    </div>
                </a>
                <hr/>
                {(type == "Influencer")?(<a href="#">
                    <div className="flex p-2 hover:bg-gray-100">
                        <CiBank className="text-[70px] text-blue-400 bg-gray-100 rounded-xl"/>
                        <div className="p-2">
                            <p className="text-lg">Bank Account</p>
                            <p className="text-xs text-gray-500">For smoother transactions</p>
                        </div>
                    </div>
                </a>):<div></div>}
                <hr/>
                <a href="#">
                    <div className="flex p-2 hover:bg-gray-100">
                        <LuLogOut className="text-[70px] text-blue-400 bg-gray-100 rounded-xl"/>
                        <div className="p-2">
                            <p className="text-lg">Logout</p>
                            <p className="text-xs text-gray-500">Save your credentials before logging out</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    );
}