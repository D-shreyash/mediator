import Image from "next/image";

export default function MailItemList({items}) {
    return(
        <div className="bg-white rounded-lg p-3 select-none" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)' }}>
            <p className="text-lg mb-1">PENDING</p>
            <hr/>
            <div className="max-h-[300px] overflow-y-auto scroll-hide">
                {items.map((item) => {
                    return(
                        <a href="#">
                        <div className="flex justify-between p-1">
                            <div className="flex">
                                <Image className="p-2   w-auto h-auto" src={"/dp1.png"} width={52} height={52}/>
                                <div className="p-2">
                                    <p className="text-sm font-bold overflow-hidden">{item.name.toUpperCase()}</p>
                                    <p className="text-xs">{item.msg}</p>
                                </div>
                            </div>
                            <div className="p-3 ml-10 text-sm">
                                {item.followers}
                            </div>
                        </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}