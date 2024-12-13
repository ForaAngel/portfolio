import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Planeadito",
    description:
      "Planeadito es una aplicación web para encontrar proveedores de eventos de tu ciudad.",
    image: "/planeadito.png",
    link: "https://planeadito.com",
    tags: ["Next.js", "Tailwind", "MongoDB"],
  },
  {
    title: "Aura",
    description:
      "Diseño de una landing page para una empresa de desarrollo de software.",
    image: "/Aura-mockup.png",
    link: "https://aura-portfolio.vercel.app",
    tags: ["Framer Motion", "Next.js", "Tailwind"],
  },
  {
    title: "Luxe",
    description: "Diseño de una landing page para una joyeria.",
    image: "/Luxe-mockup.png",
    link: "https://luxe-blond.vercel.app",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    title: "Predep",
    description:
      "Aplicacion web de prediccion de resultados de partidos de deportes.",
    image: "/predep-mockup.png",
    link: "https://www.predep.tech",
    tags: ["Next.js", "MongoDB", "tailwind"],
  },
  {
    title: "Hablar con santa",
    description: "Aplicacion web para hablar con santa mediante IA.",
    image: "/santa-mockup.png",
    link: "https://www.hablarconsanta.com",
    tags: ["Next.js", "Bland AI", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Una selección de mis trabajos más recientes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              className="group bg-base-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-80 md:h-96 lg:h-72 xl:h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transform transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-400 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 text-sm bg-base-300 rounded-full text-gray-400 group-hover:text-primary transition-colors font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
