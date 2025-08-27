
import Image from "next/image";


function Nosotros() {

    return(
        <div >
            
            <Image
                src="/Diente.jpg"
                alt="Diente"
                width={400}
                height={400}
                className="mx-auto mt-[7rem] "
            />
            <p className="text-center text-[6rem]">???</p>
        </div>
    );
};

export default Nosotros;