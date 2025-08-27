
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";


function SocialMedia() {
    return (
        <div className="flex flex-col fixed z-50 gap-2 bottom-25 right-10">
            <Link 
                href={"https://www.instagram.com/clinicadentaldra.ingridabreu/"}
                className="
                    flex justify-center items-center
                    bg-white text-[#03399e] text-[2rem]
                    w-16 h-16
                    p-3 rounded-full shadow-lg 
                    hover:shadow-xl hover:text-[4rem] transition-all duration-300
                "
                target="_blank"
            >
                <FaInstagram />
            </Link>

            <Link 
                href={"https://www.facebook.com/profile.php?id=61566923373474"} 
                className="
                    flex justify-center items-center
                    bg-white text-[#03399e] text-[2rem]
                    w-16 h-16 
                    p-3 rounded-full shadow-lg 
                    hover:shadow-xl hover:text-[4rem] transition-all duration-300
                "
                target="_blank"
            >
                <FaFacebook />
            </Link>

            <Link 
                href={"https://api.whatsapp.com/send/?phone=18092425777&text&type=phone_number&app_absent=0"} 
                className="
                    flex justify-center items-center
                    bg-white text-[#03399e] text-[2rem]
                    w-16 h-16
                    p-3 rounded-full shadow-lg 
                    hover:shadow-xl hover:text-[4rem] transition-all duration-300
                "
                target="_blank"
            >
                <FaWhatsapp />
            </Link>
        </div>

    )
}


export default SocialMedia;