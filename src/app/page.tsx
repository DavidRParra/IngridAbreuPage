
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const imagenes = [
  "/FAMILIA.png",
  "/CHICO.png",
];

export default function Home() {
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((anterior) =>
        (anterior + 1) % imagenes.length
      );
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="w-full">
      <section className="relative w-full h-[550px] md:h-[650px] lg:h-[740px] overflow-hidden bg-[#f7f8fc]">

        {/* Imágenes que cambian cada 5 segundos */}
        {imagenes.map((imagen, index) => (
          <div
            key={imagen}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === imagenActual
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <Image
              src={imagen}
              alt={
                index === 0
                  ? "Familia sonriendo"
                  : "Joven sonriendo"
              }
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-[65%_center] md:object-center"
            />
          </div>
        ))}

      
        {/* Texto principal */}
        <div className="relative z-10 flex h-full items-center px-6 sm:px-12 md:px-16 lg:px-24">
          <div className={`w-full max-w-[650px] md:w-[52%] ${poppins.className}`}>

          <h1
            className={`${montserrat.className} text-[#03399e] text-8xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-bold leading-[1.2] tracking-[-0.03em]`}
          >
            Di hola a una{" "}
            <span className="font-extrabold">
              atención dental avanzada
            </span>{" "}
            para la vida real.
          </h1>

            <p className="mt-6 text-[#263456] text-base sm:text-lg md:text-xl leading-[1.8] font-normal">
              En la Clínica Dental Dra. Ingrid Abreu,
              ofrecemos una atención integral que es
              simple, cómoda y para toda la familia,
              porque creemos que el cuidado dental
              no debería ser una tarea, sino algo
              que esperar con agrado.
            </p>

            <Link
              href="/citas"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#03399e] px-7 py-4 text-white text-base md:text-lg font-semibold transition-all duration-300 hover:bg-[#00266e] hover:scale-105"
            >
              Agenda Cita con nosotros
            </Link>

          </div>
        </div>


        {/* Indicadores de imágenes */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {imagenes.map((_, index) => (
            <button
              key={index}
              onClick={() => setImagenActual(index)}
              aria-label={`Mostrar imagen ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                imagenActual === index
                  ? "w-9 bg-[#03399e]"
                  : "w-3 bg-gray-400"
              }`}
            />
          ))}
        </div>

      </section>
    </main>
  );
}
