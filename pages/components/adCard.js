import Image from "next/image";

export default function AdCard({image,link}) {
    return(
        <div className="w-50 border-black border-[2px] rounded-[10px] cursor-pointer hover:shadow-md">
            <Image src={image} alt={link} width={400} height={300}/>
        </div>
    );
}