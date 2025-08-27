
import Image from "next/image";
import Link from "next/link";
import {FaFacebook} from "react-icons/fa"


function Nosotros() {

    return(
        <div >
            
            <Image
                src="/Diente.jpg"
                alt="Diente"
                width={350}
                height={350}
                className="mx-auto mt-[7rem]"
            />
           <div className="w-full flex justify-center mt-[2rem]">
            <Image
                src="/image.png"
                alt="Diente"
                width={600}
                height={350}
                className="ml-8"
            />
            </div > 
        </div>
    );
};

export default Nosotros;