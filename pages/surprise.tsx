import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const SurprisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mt-20 mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sección de imagen */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full" style={{ paddingTop: "75%" }}>
              {" "}
              {/* Ajusta este porcentaje según la relación de aspecto de tu imagen */}
              <Image
                src="/images/surprise-1.jpg"
                alt="Imagen sorpresa"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Sección de texto */}
          <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¡Sorpresa!
            </h1>
            <p className="text-lg text-gray-300">
              ¿Creíste que no había una sorpresa hoy? Pues claro que chi,
              siempre me encanta sorpenderte con algo nuevo que se me pueda
              ocurrir y que además sabes muy bien que hago con todo mi amor.
              Quiero darte a ti estas imágenes que si bien tal vez no han
              ocurrido aún, pues me encnataría poder llegar a tener muchas
              fotitos como estas contigo mi hermosa princesa.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-16 lg:mt-4">
          {/* Sección de imagen */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full" style={{ paddingTop: "75%" }}>
              {" "}
              {/* Ajusta este porcentaje según la relación de aspecto de tu imagen */}
              <Image
                src="/images/surprise-2.jpg"
                alt="Imagen sorpresa"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Sección de texto */}
          <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¡Feliz Aniversario!
            </h1>
            <p className="text-lg text-gray-300">
              Quiero que cada día te puedas sentir muy especial, aunque me
              encnataría poderte dar muchísimo más a ti, pues igual intento
              hacer algo único y especial para ti mi amor, recuerda que todo lo
              hago con gusto y con muchísimo amor. Espero poder cumplir contigo
              muchos de los sueños que permanecen en nuestra mente y en estas
              fotitos, te prometo que pronto podremos estar juntos y así
              decirles a todos y demostrarles lo enamorados que estamos. Te amo
              muchísimo mi amor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurprisePage;
