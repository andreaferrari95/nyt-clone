import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 border-t mt-12 py-8 px-4 text-sm text-gray-600"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/*Copyright*/}
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Andrea Ferrari</span>. All rights
          reserved.
        </div>

        {/*Contact + Socials*/}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <a
            href="mailto:andreaferraridev@gmail.com"
            className="text-green-600 font-semibold relative inline-block after:block after:h-[2px] after:bg-green-600 
    after:scale-x-0 after:transition-transform after:duration-500 after:origin-left hover:after:scale-x-100"
          >
            andreaferraridev@gmail.com
          </a>

          <div className="flex gap-4 text-lg">
            <a
              href="https://github.com/andreaferrari95"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-transform transform hover:scale-110 "
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/andrea-ferrari-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/*NYT Logo */}
        <div className="transition-transform transform hover:scale-105">
          <a
            href="https://developer.nytimes.com"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <img
              src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208351"
              alt="Powered by The New York Times"
              className="h-6 md:h-8 transition-transform duration-500 group-hover:scale-102"
            />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
