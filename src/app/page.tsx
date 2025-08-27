import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex justify-center py-2">
      <div className="flex items-center justify-center text-center gap-[6rem] p-4 text-[1.5rem] w-[80%] my-12 flex-col md:flex-row">

        <div className="flex flex-col text-start justify-evenly gap-4 w-[50%] h-[55rem]">
          <div>
            <h2 className=" text-[5rem] text-[#03399e]">Di hola a una <u>atención dental avanzada</u> para la vida real.</h2>
            <p className="text-[2rem]">En la Clinica Dental Dra. Ingrid Abreu, ofrecemos una atención integral que es simple, cómoda y para toda la familia, porque creemos que el cuidado dental no debería ser una tarea, sino algo que esperar con agrado.</p>
          </div>

          <div className="flex">
            <Link href="/citas" className="flex items-center gap-[.8rem] border border-transparent bg-[#03399e] text-[#ffffff] px-6 py-4 rounded-4xl hover:bg-[#ffffff] hover:text-[#03399e] hover:border-[#03399e] text-[1.8rem] font-bold cursor-pointer">
                {/*<FaArrowRight className="inline-block border rounded-full"/>*/}
                Agenda Cita con nosotros
            </Link>
          </div>
        </div>

        <Image
          src="/Home_Page1.jpg"
          alt="Imagen de la Clinica Dental Dra. Ingrid Abreu"
          width={1500}
          height={2500}
          className="rounded-lg shadow-lg w-[60rem] h-[50rem] fill"
        />
      </div>
    </div>
  );
}
