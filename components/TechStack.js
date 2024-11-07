import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

const technologies = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-8 h-8" />,
    description: "Lenguaje principal para desarrollo web",
  },
  {
    name: "React",
    icon: <SiReact className="w-8 h-8" />,
    description: "Biblioteca para interfaces de usuario",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8" />,
    description: "Framework React para producción",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-8 h-8" />,
    description: "Runtime de JavaScript en servidor",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8" />,
    description: "Framework CSS utility-first",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-8 h-8" />,
    description: "Base de datos NoSQL",
  },
];

const TechStack = () => {
  return (
    <section className="py-12 md:py-20 bg-base-200/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Mi Stack Tecnológico
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
            Herramientas y tecnologías que uso para crear aplicaciones web
            modernas y escalables
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-4 md:p-6 rounded-xl bg-base-200 hover:bg-base-300 transition-colors group"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                <div className="text-primary group-hover:text-primary/80 transition-colors">
                  {tech.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold truncate">
                  {tech.name}
                </h3>
              </div>
              <p className="text-gray-400 text-xs md:text-sm line-clamp-2">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 text-sm md:text-base px-4">
            Y otras tecnologías como DaisyUI, NextAuth, Mongoose, y más...
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
