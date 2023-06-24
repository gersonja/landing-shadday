import Image from "next/image";
import ClockIcon from "@heroicons/react/20/solid/ClockIcon";
import MapPinIcon from "@heroicons/react/20/solid/MapPinIcon";
import TruckIcon from "@heroicons/react/20/solid/TruckIcon";
import Link from "next/link";

export default function Home () {
  return (
    <>
      <div className="fixed bottom-3 right-3 md:bottom-10 md:right-10 z-50 hover:animate-pulse flex items-center cursor-pointer" >
        <Link href="https://api.whatsapp.com/send?phone=593995569330&text=Buenos%20días." target="_blank" rel="noopener noreferrer">
          <div className="flex">
            <p className="bg-white p-3 rounded-full">Contáctanos ahora!</p>
            <Image src="/icons8-whatsapp.svg" width={50} height={50} alt="whatsapp" />
          </div>
        </Link>
      </div>
      <section id="inicio">
        <div className="h-screen">
          <div className="contentimage">
            <Image
              className="fondox"
              src="/images/AdobeStock_282316976-1024x683.jpeg.webp"
              alt="principal"
              width={1024}
              height={683}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
            <div className="w-full flex justify-center">
              <div>
                <h2 className="text-2xl font-bold">Laboratorio Clínico</h2>
                <h1 className="font-['Vivaldi'] text-8xl text-indigo-700">Shadday</h1>
              </div>
            </div>
            <div className="w-full flex justify-center pt-5 items-center">
              <button className="bg-indigo-700 hover:bg-indigo-300 hover:text-indigo-950 text-white transition-colors duration-500 px-5 py-3 font-medium lg:text-xl rounded-full">Resultados en línea</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="flex flex-wrap justify-center lg:text-lg text-white">
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-indigo-400 hover:bg-indigo-600 w-[220px] transition-colors duration-500">
              <ClockIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Horario de Atención</h2>
                <p className="font-medium">Lunes a Viernes</p>
                <p>7:00 am - 4:30 pm</p>
                <p className="font-medium">Sábado</p>
                <p>7:00 am - 2:00 pm</p>
                <p className="font-medium">Domingo</p>
                <p>7:00 am -12:00 pm</p>
              </div>
            </div>
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-indigo-400 hover:bg-indigo-600 w-[220px] transition-colors duration-500">
              <MapPinIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Dirección</h2>
                <p>Av. Lucio Oquendo, frente al Hospital Central. San Cristóbal, Edo. Táchira</p>
                <p>Venezuela</p>
              </div>
            </div>
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-indigo-400 hover:bg-indigo-600 w-[220px] transition-colors duration-500">
              <TruckIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Servicio a Domicilio</h2>
                <p>Te visitamos en la comodidad de tu hogar para la toma de muestras.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap-reverse justify-center space-x-10 pt-20">
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <h1 className="text-2xl font-bold">Covid 19</h1>
            <br />
            <p>La Administración de Alimentos y Medicamentos de los Estados Unidos (FDA) aprobó estos tipos de pruebas para diagnosticar una infección por COVID-19:</p>
            <br />
            <p><u>PRUEBA DE LA RT-PCR</u></p>
            <br />
            <p><u>PRUEBA DE ANTÍGENO
            </u></p>
            <br />
            <p><u>PRUEBA DE ANTICUERPOS IgG-IGM
            </u></p>
            <br />
            <p>En Laboratorio Clínico Shadday contamos con todos los exámenes que han sido aprobados para garantizar los resultados y seguridad de nuestros pacientes.</p>
            <br />
            <p>Para más información sobre COVID- 19, y todos los procedimientos haga click en el link de abajo.
            </p>
          </div>
          <Image
            className="rounded-md bg-indigo-300 border-2 border-indigo-950"
            src="/images/covid19.png"
            width={615}
            height={542} alt="covid19"
          />
        </div>
      </section >
      <section id="nosotros" className="pt-10">
        <div className="flex flex-wrap justify-center space-x-10 pt-20">
          <Image
            className="rounded-md"
            src="/images/laboratorio_clinico.jpg"
            width={615}
            height={542} alt="pipeta"
          />
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <h1 className="text-2xl font-bold">¿Quiénes Somos?</h1>
            <br />
            <p className="px-5">Somos un laboratorio clínico que ofrece servicios de análisis clínicos, con el fin de satisfacer las necesidades de nuestros clientes, brindando un servicio de calidad, confiable y oportuno, con personal altamente calificado y tecnología de punta.</p>
          </div>
        </div>
      </section>
      <section id="servicios">
        <div className="container m-auto">
          <h1 className="text-4xl font-bold text-center pt-20">Nuestros Servicios</h1>
          <div className="flex flex-wrap justify-center mx-10">
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Atención al cliente</h1>
              <br />
              <Image src="/images/tomademuestra.png" width={450} height={300} alt="tomademuestra" />
              <br />
              <p>Nuestro personal esta capacitado para brindar una atención profesional y personalizada a cada uno de nuestros pacientes.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-center">Toma de muestras a domicilio</h1>
              <br />
              <Image src="/images/domicilio.jpg" width={450} height={300} alt="domicilio" />
              <br />
              <p>Nuestro personal acudirá a su su domicilio, con todas las normas de bioseguridad, para realizar las tomas de muestras. Nos acomodamos a su horario.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Convenios</h1>
              <br />
              <Image src="/images/convenio.jpg" width={450} height={300} alt="convenio" />
              <br />
              <p>Laboratorio Clínico Shadday tiene convenios con centros médicos privados y públicos en medicina interna, ginecología, traumatología y endocrinología, entre otras.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Salud Ocupacional</h1>
              <br />
              <Image src="/images/ocupacional.jpg" width={450} height={300} alt="ocupacional" />
              <br />
              <p>Realizamos todos los exámenes, para las fichas ocupacionales indicadas por el Ministerio de Trabajo, empresas privadas, colegios y escuelas.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="">
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-4xl font-bold py-10">¿Por qué elegir Laboratorio Clínico Shadday?</h1>
          <div className="flex flex-wrap">
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Tecnología de Punta</h2>
                <br />
                <p>Contamos con equipos de última generación para garantizar la calidad de nuestros resultados.</p>
              </div>
            </div>
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Precisión en los Resultados</h2>
                <br />
                <p>Realizamos estrictos controles de claidad internos y externos con laboratorios de referencia.  De esta manera garatizamos la precisión en los resultados entregados.</p>
              </div>
            </div>
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Personal Calificado</h2>
                <br />
                <p>Nuestro personal está altamente calificado para brindar un servicio de calidad y confiable.</p>
              </div>
            </div>
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Atención Personalizada</h2>
                <br />
                <p>Brindamos una atención personalizada a cada uno de nuestros pacientes.</p>
              </div>
            </div>
            <div className="wc-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto">
        <div className="h-screen">
          <div className="absolute -z-10 w-full">
            <Image
              className="fondox"
              src="/images/contactenos.jpg"
              alt="principal"
              width={1024}
              height={683}
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-10 h-[90%]">
            <h1 className="text-3xl text-blue-800 font-bold">laboratorioclinicoshadday@gmail.com</h1>
            <br />
            <h1 className="text-3xl text-blue-800 font-bold">(0276) 999-xx-xx</h1>
          </div>
        </div>
      </section>
    </>
  )
}
