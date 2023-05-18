import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white md:flex text-start justify-around py-6 px-20">
        <div className="flex flex-col ">
          <p className="text-blue-600 font-semibold py-6">COMPANY</p>
          <Link>About</Link>
          <Link className="my-1">Careers</Link>
          <Link>Brand Center</Link>
          <Link className="my-1"> Blog</Link>
        </div>
        <div className="flex flex-col ">
          <p className="text-blue-600 font-semibold py-6">HELP CENTER</p>
          <Link>Discord Server</Link>
          <Link className="my-1">Twitter</Link>
          <Link>Facebook</Link>
          <Link className="my-1"> Contact Us</Link>
        </div>
        <div className="flex flex-col ">
          <p className="text-blue-600 font-semibold py-6">LEGAL</p>
          <Link>Privacy Policy</Link>
          <Link className="my-1">Licensing</Link>
          <Link>Terms & Conditions</Link>
        </div>
        <div className="flex flex-col ">
          <p className="text-blue-600 font-semibold py-6">DOWNLOAD</p>
          <Link>iOS</Link>
          <Link className="my-1">Android</Link>
          <Link>Windows</Link>
          <Link className="my-1"> MacOS</Link>
        </div>
      </div>
      <div className="flex items-center px-2 justify-around py-4 text-black bg-slate-400">
        <Link to="/">
          <img
            src="https://media-cdn2.greatbritishchefs.com/media/kxtop14a/gbc_logo1.svg"
            alt=""
          />
        </Link>
        <div className="flex gap-4">
          <Link>
            <FaFacebook></FaFacebook>
          </Link>
          <Link>
            <FaInstagram></FaInstagram>
          </Link>
          <Link>
            <FaTwitter></FaTwitter>
          </Link>
          <Link>
            <FaGithub></FaGithub>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
