
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaChevronDown,
  FaPhone,
  FaArrowRight,
  FaMapMarked,
  FaSearch,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";

type NavBarProps = {
  menuAbierto: boolean;
  setMenuAbierto: (abierto: boolean) => void;
};

function NavBar({ menuAbierto, setMenuAbierto }: NavBarProps) {

  const estiloSubmenu =
    "block w-full rounded-md px-3 py-2 text-white hover:bg-white/15 hover:text-white transition-colors duration-200";

  return (
    <div className="contents">

      {/* BARRA HORIZONTAL SUPERIOR */}
      <nav className="relative col-span-full flex justify-between items-center gap-4 p-4 bg-white shadow-md z-20">

        {/* LOGO Y NOMBRE */}
        <div className="flex items-center gap-4 min-w-0">

          <Image
            src="/IngridAbreu.jpg"
            alt="Logo de la Clínica Dental Dra. Ingrid Abreu"
            width={150}
            height={150}
            className="object-contain w-[5rem] md:w-[7rem] rounded-full hidden sm:block"
          />

          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-[1.3rem] md:text-[1.8rem] min-w-0"
          >
            <Image
              src="/ClinicaDentalIngrid_Icon.png"
              alt="Logo de la Clínica Dental Dra. Ingrid Abreu"
              width={150}
              height={50}
              className="object-contain w-[3rem] hidden md:block"
            />

            <p>Clinica Dental Dra. Ingrid Abreu</p>
          </Link>

        </div>

        {/* TELÉFONO Y CITAS */}
        <div className="flex items-center gap-3 md:gap-5 shrink-0">

          {/* TELÉFONO */}
          <div className="relative group">

            <a
              href="tel:+18297477125"
              aria-label="Llamar al +1 (829) 747-7125"
              className="flex items-center justify-center w-[4rem] h-[4rem] border border-[#03399e] text-[#03399e] rounded-full hover:bg-[#03399e] hover:text-white transition-all duration-300"
            >
              <FaPhone className="rotate-90 text-[1.7rem]" />
            </a>

            {/* NÚMERO FLOTANTE */}
            <div className="absolute top-full right-0 mt-3 bg-[#03399e] text-white px-5 py-3 rounded-lg shadow-lg whitespace-nowrap text-[1.5rem] font-semibold opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-300 z-50 pointer-events-none">

              +1 (829) 747-7125

              <div className="absolute -top-2 right-4 w-4 h-4 bg-[#03399e] rotate-45" />

            </div>

          </div>

          {/* BOTÓN CITAS */}
          <Link
            href="/citas"
            className="flex items-center gap-[.8rem] border border-transparent bg-[#03399e] text-white px-3 md:px-4 py-2 rounded-full hover:bg-white hover:text-[#03399e] hover:border-[#03399e] text-[1.4rem] md:text-[1.8rem] font-bold whitespace-nowrap transition-all duration-300"
          >
            <FaArrowRight className="inline-block border rounded-full" />
            Citas
          </Link>

        </div>

        {/* BOTÓN ABRIR / CERRAR MENÚ */}
        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-lateral"
          className="absolute top-[calc(100%+16px)] left-5 z-30 flex items-center justify-center w-[4rem] h-[4rem] bg-white text-[#03399e] text-[2rem] rounded-xl shadow-lg border border-gray-100 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* BARRA LATERAL AZUL */}
      {menuAbierto && (

        <nav
          id="menu-lateral"
          aria-label="Menú lateral"
          className="w-full min-w-0 bg-[#03399e] text-white border-r border-[#002b7a]"
        >

          <ul className="flex flex-col gap-5 px-5 pb-5 pt-[5rem] text-[1.5rem]">

            {/* BUSCADOR */}
            <li className="flex items-center gap-3 border border-white/50 rounded-full px-4 py-3 bg-white/10">

              <FaSearch className="text-white shrink-0" />

              <input
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar"
                className="w-full min-w-0 outline-none text-[1.5rem] bg-transparent text-white placeholder:text-white/70"
              />

            </li>

            {/* INICIO */}
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 text-white hover:text-blue-200 font-bold py-2 transition-colors duration-200"
              >
                <FaHome className="text-white" />
                Inicio
              </Link>
            </li>

            {/* SERVICIOS */}
            <li>
              <details className="group">

                <summary className="flex gap-2 items-center text-white hover:text-blue-200 font-bold cursor-pointer py-2 list-none transition-colors">

                  Servicios

                  <FaChevronDown className="h-[1.3rem] w-[1.3rem] transition-transform duration-200 group-open:rotate-180" />

                </summary>

                <ul className="bg-[#002b7a] text-white mt-2 ml-2 p-2 border-l-2 border-white/40 rounded-lg flex flex-col gap-1">

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Diagnóstico y preventivo
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Ortodoncia
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Periodoncia
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Odontología prostética
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Procedimientos estéticos
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Odontología restauradora
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Cirugía oral
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Endodoncia
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Atención de emergencia
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Odontología pediátrica
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Apnea del sueño
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Sedación
                    </Link>
                  </li>

                </ul>

              </details>
            </li>

            {/* SEPARADOR */}
            <li className="border-t border-white/25" />

            {/* ACCESIBILIDAD */}
            <li>
              <details className="group">

                <summary className="flex gap-2 items-center text-white hover:text-blue-200 font-bold cursor-pointer py-2 list-none transition-colors">

                  Accesibilidad

                  <FaChevronDown className="h-[1.3rem] w-[1.3rem] transition-transform duration-200 group-open:rotate-180" />

                </summary>

                <ul className="bg-[#002b7a] text-white mt-2 ml-2 p-2 border-l-2 border-white/40 rounded-lg flex flex-col gap-1">

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Plan dental con descuento
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Planes de seguro dental
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className={estiloSubmenu}>
                      Opciones de financiamiento
                    </Link>
                  </li>

                </ul>

              </details>
            </li>

            {/* SEPARADOR */}
            <li className="border-t border-white/25" />

            {/* NOSOTROS */}
            <li>
              <Link
                href="/nosotros"
                className="text-white hover:text-blue-200 font-bold block py-2 transition-colors duration-200"
              >
                Nosotros
              </Link>
            </li>

            {/* SEPARADOR */}
            <li className="border-t border-white/25" />

            {/* UBICACIÓN */}
            <li className="flex flex-col items-start gap-3">

              <Link
                href="https://maps.app.goo.gl/w4Lz4Gwj9zCcWPBd9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[.8rem] border border-white bg-white text-[#03399e] px-4 py-2 rounded-full hover:bg-blue-100 transition-all duration-300 text-[1.6rem] font-bold"
              >
                <FaMapMarked />
                La Vega
              </Link>

              <p className="text-white text-[1.2rem] font-bold leading-relaxed">
                La Vega, Avenida Pedro A. Rivera en la plaza azura, primer nivel.
              </p>

            </li>

          </ul>

        </nav>
      )}

    </div>
  );
}

export default NavBar;
