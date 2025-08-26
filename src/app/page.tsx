import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className="flex items-center justify-center text-center gap-6 p-4 text-[1.5rem]">

        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="font-bold text-[3rem]">Di hola a una atención dental avanzada para la vida real.</h2>
          <p>En la Clinica Dental Dra. Ingrid Abreu, ofrecemos una atención integral que es simple, cómoda y para toda la familia, porque creemos que el cuidado dental no debería ser una tarea, sino algo que esperar con agrado.</p>
        </div>

        <Image
          src="/Home_Page1.jpg"
          alt="Imagen de la Clinica Dental Dra. Ingrid Abreu"
          width={1500}
          height={500}
          className="object-contain w-full h-[30rem]"
        />

        
      </div>
    </div>
  );
}
