
import {
  FaTooth,
  FaBullseye,
  FaEye,
  FaHeart,
} from "react-icons/fa";

function Nosotros() {
  return (
    <section className="w-full bg-[#f8fbff] px-5 py-6 md:px-8 lg:px-10">

      <div className="w-full max-w-[1500px] mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center mb-6">

          <span className="text-[#03399e] font-semibold uppercase tracking-[3px] text-base">
            Conócenos
          </span>

          <h1 className="text-4xl lg:text-6xl font-bold text-[#03399e] mt-2">
            Clínica Dental Dra. Ingrid Abreu
          </h1>

          <div className="w-20 h-1 bg-[#009bd3] mx-auto mt-3 rounded-full" />

          <p className="text-gray-600 mt-3 text-lg lg:text-xl">
            Comprometidos con tu sonrisa, tu bienestar y tu salud bucodental.
          </p>

        </div>

        {/* QUIÉNES SOMOS - CUADRO MÁS GRANDE */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-50 px-8 py-8 lg:px-14 lg:py-10 mb-6">

          <div className="flex flex-col items-center text-center">

            {/* ICONO */}
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <FaTooth className="text-[#03399e] text-3xl" />
            </div>

            {/* TÍTULO */}
            <h2 className="text-3xl lg:text-[34px] font-bold text-[#03399e] mb-5">
              ¿Quiénes somos?
            </h2>

            {/* TEXTO MÁS GRANDE */}
            <p className="text-gray-500 text-lg lg:text-[18px] leading-[1.7] max-w-7xl">
              La Clínica Dental Dra. Ingrid Abreu es un centro
              odontológico comprometido con el cuidado de la
              salud bucodental de nuestros pacientes.
              Nuestro propósito es ofrecer tratamientos
              odontológicos de calidad, brindando una atención
              profesional, personalizada y humana.
              Trabajamos para que cada paciente se sienta
              cómodo, seguro y confiado, ofreciendo soluciones
              que contribuyan a mejorar su salud y bienestar.
            </p>

          </div>
        </div>

        {/* MISIÓN, VISIÓN Y VALORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          {/* MISIÓN */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-6 text-center flex flex-col items-center hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3">
              <FaBullseye className="text-[#03399e] text-2xl" />
            </div>

            <h3 className="text-2xl lg:text-[28px] font-bold text-[#03399e] mb-4">
              Misión
            </h3>

            <p className="text-gray-500 text-lg lg:text-[18px] leading-[1.6]">
              Desarrollar e implementar un concepto de
              odontología capaz de prevenir y realizar
              todo tipo de tratamientos bucodentales,
              teniendo como objetivos principales
              fomentar en la sociedad la importancia
              y necesidad de cuidar la salud bucodental
              y solucionar los problemas bucodentales
              de nuestros pacientes.
            </p>

          </div>

          {/* VISIÓN */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-6 text-center flex flex-col items-center hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3">
              <FaEye className="text-[#03399e] text-2xl" />
            </div>

            <h3 className="text-2xl lg:text-[28px] font-bold text-[#03399e] mb-4">
              Visión
            </h3>

            <p className="text-gray-500 text-lg lg:text-[18px] leading-[1.6]">
              Clínica Dental Ingrid Abreu es una entidad
              que pretende ser un referente a seguir
              dentro del ramo de odontología,
              por la calidad de su trabajo
              y por el trato humano.
            </p>

          </div>

          {/* VALORES */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-6 text-center flex flex-col items-center hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-3">
              <FaHeart className="text-[#03399e] text-2xl" />
            </div>

            <h3 className="text-2xl lg:text-[28px] font-bold text-[#03399e] mb-4">
              Valores
            </h3>

            <p className="text-gray-500 text-lg lg:text-[18px] leading-[1.6]">
              Los valores que la Clínica Dental Ingrid
              Abreu promueve entre sus pacientes y
              empleados se resumen en la búsqueda
              continua de resultados que favorezcan
              y satisfagan a todos los miembros de
              nuestra organización, siempre teniendo
              presente a nuestros pacientes.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Nosotros;
