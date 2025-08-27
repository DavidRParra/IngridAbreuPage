
import Link from "next/link";
import Image from "next/image";
import {FaChevronDown, FaPhone, FaArrowRight, FaMapMarked} from "react-icons/fa";

function NavBar() {
    return (
        <div className="text-[1.7rem]">

            <nav>
                <ul className="flex justify-around items-center p-4 bg-white shadow-md">
                    <Image
                        src="/IngridAbreu.jpg"
                        alt="Logo de la Clinica Dental Dra. Ingrid Abreu"
                        width={150}
                        height={150}
                        className="object-contain w-[7rem] rounded-full"
                    />
                    <li>
                        <Link href="/" className="flex items-center gap-2 font-semibold text-[1.8rem]">
                            <Image
                                src="/ClinicaDentalIngrid_Icon.png"
                                alt="Logo de la Clinica Dental Dra. Ingrid Abreu"
                                width={150}
                                height={50}
                                className="object-contain w-[3rem]"
                            />
                            <p>Clinica Dental Dra. Ingrid Abreu</p>
                        </Link>
                    </li>

                    <div className="flex gap-8">

                        <li className="relative group">
                            <Link href="#" className="flex gap-1 items-center group-hover:text-[#03399e] font-bold">
                                Servicios
                                <FaChevronDown className=" h-[1.5rem] w-[1.5rem] transform group-hover:rotate-180 transition-transform duration-450" />
                            </Link>

                            <ul className="absolute hidden group-hover:block bg-gray-100 left-0 top-10 w-[23rem] rounded-lg z-10">
                                <li className="relative group hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">
                                    <Link href="#">
                                        Diagnostico y preventivo
                                    </Link>
                                    {/*<ul className="absolute hidden group-hover:block bg-gray-100 right-full top-0 w-[18rem] rounded-lg shadow-lg z-20">
                                        <Link href="#">
                                        <li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Frenillos</li>
                                        </Link>
                                        <Link href="#">
                                        <li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Invisalign</li>
                                        </Link>
                                        <Link href="#">
                                        <li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Retenedores</li>
                                        </Link>
                                    </ul>*/}
                                </li>
                                    
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Ortodoncia</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Peridoncia</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Odontología prostética</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Procedimientos esteticos</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Odontología restauradora</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Cirugía oral</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Endodoncia</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Atención de emergencia</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Odontología pediátrica</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Apnea del sueño</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Sedacion</li></Link>


                            </ul>
                        </li>

                        <div className="w-[.2rem] bg-[#03399e]"/>

                        <li className="relative group">
                            <Link href="#" className="flex gap-1 items-center group-hover:text-[#03399e] font-bold">
                                Accesibilidad
                                <FaChevronDown className=" h-[1.5rem] w-[1.5rem] transform group-hover:rotate-180 transition-transform duration-450" />
                            </Link>

                            <ul className="absolute hidden group-hover:block bg-gray-100 left-0 top-10 w-[23rem] rounded-lg z-10">
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Plan dental con descuento</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Planes de seguro dental</li></Link>
                                <Link href="#" ><li className="hover:bg-[#03399e] hover:text-[#ffffff] px-4 py-2 rounded-lg">Opciones de financiamiento</li></Link>
                            </ul>
                        </li>

                        <div className="w-[.2rem] bg-[#03399e]"/>

                        <li>
                            <Link href="/nosotros" className="hover:text-[#03399e] font-bold">Nosotros</Link>
                        </li>

                        {/*<li>
                            <Link href="#" className="hover:text-[#03399e] font-bold">Noticias</Link>
                        </li>*/}

                    </div>

                    <li>
                        <p className="flex items-center gap-[.8rem] bg-[#ffffff] border border-[#03399e] text-[#03399e]  px-4 py-2 rounded-full hover:bg-[#03399e] hover:text-[#ffffff] hover:border-transparent font-bold cursor-pointer">
                            <FaPhone className="rotate-90"/>
                            +1 (829) 747-7125
                        </p>
                    </li>

                    <li>
                        <Link href="/citas" className="flex items-center gap-[.8rem] border border-transparent bg-[#03399e] text-[#ffffff] px-4 py-2 rounded-4xl hover:bg-[#ffffff] hover:text-[#03399e] hover:border-[#03399e] text-[1.8rem] font-bold cursor-pointer">
                            <FaArrowRight className="inline-block border rounded-full"/>
                            Citas
                        </Link>
                    </li>

                    <li className="flex items-center text-center gap-2 w-[25%]">
                        <Link href="https://maps.app.goo.gl/w4Lz4Gwj9zCcWPBd9" target="_blank" className="flex items-center gap-[.8rem] border border-transparent bg-[#03399e] text-[#ffffff] px-4 py-2 rounded-4xl hover:bg-[#ffffff] hover:text-[#03399e] hover:border-[#03399e] text-[1.8rem] font-bold cursor-pointer w-[50%] justify-center">
                            <FaMapMarked />
                            La Vega
                        </Link>
                        <p className="text-[1.2rem] w-[50%] flex justify-start font-bold">
                        La Vega, Avenida Pedro A. Rivera en la plaza azura, primer nivel.
                        </p>
                    </li>

                </ul>

            </nav>

        </div>
    );
}

export default NavBar;