import { useRouter } from "next/router"
const Header = ()=>{
    const router = useRouter()
    return(
        <div className=" border-red-200 bg-white text-black p-4 px-28 text-[40px] font-serif flex justify-between items-center">
            
            <div className="cursor-pointer" onClick={()=>{router.push("/")}}>Rishabh</div>

            <div className="flex gap-5 text-[23px] text-orange-400">
                <span className="border border-orange-400 px-7 rounded-[20px] cursor-pointer" onClick={()=>{router.push("/about")}}>about</span>
                <span className="border border-orange-400 px-5 rounded-[20px] cursor-pointer" onClick={()=>{router.push("/contactus")}}>contact us</span>
                <span className="border border-orange-400 px-5 rounded-[20px] cursor-pointer" onClick={()=>{router.push("/productlist")}}>products</span>
            </div>
        </div> 
    )
}

export default Header