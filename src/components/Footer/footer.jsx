import { Link } from "react-router-dom";
import { CiMail, CiPhone } from "react-icons/ci";
import Logo from "../../assets/Logo.png";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#363636] p-10 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <aside className="flex flex-col items-start">
            <img src={Logo} className="w-32 mb-4" alt="Company Logo" />
            <nav className="flex flex-col">
              <Link to="/" className="link link-hover mb-2">
                Como Funciona?
              </Link>
              <Link to="/terms" className="link link-hover mb-2">
                Termos de Serviço
              </Link>
              <Link to="/privacy&policy " className="link link-hover mb-2">
                Política de Privacidade
              </Link>
              <Link to="/" className="link link-hover">
                Una-se a Nossa Equipe
              </Link>
            </nav>
          </aside>

          <nav className="flex flex-col">
            <h1 className="footer-title text-[#D6B8FF] text-lg mb-4">
              Para Freelancer
            </h1>
            <Link to="/about" className="link link-hover mb-2">
              Projetos
            </Link>
            <Link to="/contact" className="link link-hover mb-2">
              Contato
            </Link>
            <Link to="/faq" className="link link-hover">
              F.A.Q
            </Link>
          </nav>
          <nav className="flex flex-col">
            <h1 className="footer-title text-[#D6B8FF] text-lg mb-4">
              Para Clientes
            </h1>
            <Link to="/about" className="link link-hover mb-2">
              Freelancers
            </Link>
            <Link to="/faq" className="link link-hover mb-2">
              F.A.Q
            </Link>
          </nav>
          <nav className="flex flex-col">
            <h1 className="footer-title text-[#D6B8FF] text-lg mb-4">
              Siga - nos
            </h1>
            <div className="flex  gap-5  text-black ">
              <Link to="/about" className="link bg-white link-hover p-2 rounded-full mb-2">
                <FaFacebookF size={26} />
              </Link>
              <Link to="/about" className="link bg-white link-hover p-2 rounded-full mb-2">
                <IoLogoInstagram size={26} />
              </Link>
              <Link to="/faq" className="link bg-white link-hover p-2 rounded-full mb-2">
                <FaTwitter size={26} />
              </Link>
            </div>
          </nav>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TuyaFreela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
