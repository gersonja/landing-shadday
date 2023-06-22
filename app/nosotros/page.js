import Image from "next/image";

export default function Nosotros () {
  return (
    <section>
      <div className="h-screen">
        <div className="contentimage">
          <Image
            className="fondox"
            src="/images/AdobeStock_158429858-1024x683.jpeg.webp"
            alt="principal"
            width={1024}
            height={683}
          />
        </div>
        <div className="flex flex-col items-center h-[90%]">
          <h1>Home Page</h1>
          <h2>Subtítulo de la página principal</h2>
        </div>
      </div>
    </section>
  )
}
