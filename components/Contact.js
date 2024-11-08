import Link from "next/link";
import config from "@/config";

const Contact = () => {
  // Reemplaza este URL con tu enlace personal de Tidycal
  const tidycalUrl = "https://tidycal.com/elforadev/15-minute-meeting";

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-base-200 rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Contáctame<span className="text-primary">.</span>
          </h2>

          <p className="text-gray-400 text-center mb-8">
            Puedes contactarme por correo electrónico o por mis redes sociales.{" "}
            <Link
              href="https://linkedin.com/in/angel-delgado-dev"
              className="text-primary hover:text-primary/80 transition-colors"
              target="_blank"
            >
              LinkedIn
            </Link>{" "}
            o{" "}
            <Link
              href="https://x.com/ElforaDev"
              className="text-primary hover:text-primary/80 transition-colors"
              target="_blank"
            >
              Twitter
            </Link>{" "}
            si quieres conectar.
          </p>

          <div className="text-center mb-8">
            <Link
              href={`mailto:${config.mailgun.supportEmail}`}
              className="inline-flex items-center gap-2 text-xl font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-primary"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              {config.mailgun.supportEmail}
            </Link>
          </div>

          <div className="text-center">
            <Link
              href={tidycalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-wide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0117.25 2.25c.41 0 .75.334.75.75V4.5h1.5c1.5 0 2.75 1.25 2.75 2.75v11.5c0 1.5-1.25 2.75-2.75 2.75h-15A2.75 2.75 0 012 18.75V7.25C2 5.75 3.25 4.5 4.75 4.5h1.5V3c0-.416.334-.75.75-.75zM4.75 6h14.5c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25h-14.5c-.69 0-1.25-.56-1.25-1.25V7.25C3.5 6.56 4.06 6 4.75 6z"
                  clipRule="evenodd"
                />
              </svg>
              Agendar llamada
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
