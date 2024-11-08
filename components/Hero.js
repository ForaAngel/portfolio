import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-200">
            Hola, soy Angel<span className="text-primary">.</span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl text-gray-300">
            Soy un <span className="text-primary">Frontend Developer</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Desarrollador frontend con años de experiencia en la industria del
            software. Me especializo en crear soluciones web innovadoras y de
            alto impacto, con un enfoque particular en la experiencia del
            usuario y el rendimiento. Siempre en constante aprendizaje y
            evolución, manteniéndome al día con las últimas tecnologías y
            tendencias del desarrollo web.
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-block px-8 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            scroll={true}
          >
            Contáctame
          </Link>
        </div>
      </div>

      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="w-full h-full grid grid-cols-12 gap-4">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
