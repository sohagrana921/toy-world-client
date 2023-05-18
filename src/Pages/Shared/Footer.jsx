import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white py-6 px-20">
        <div className="flex justify-evenly items-center">
          <div>
            <Link to="/">
              <img
                className="w-20 rounded-full"
                src="https://i.ibb.co/ZgBh5qr/XDvdbzd0-400x400.jpg"
                alt=""
              />
            </Link>
            <h3 className="font-bold mt-1 text-orange-500">Toys World</h3>
          </div>
          <h3 className="text-xl font-semibold">Follow Us With</h3>
          <div className="flex gap-6">
            <Link>
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
                alt=""
              />
            </Link>
            <Link>
              <img
                className="h-12 rounded"
                src="https://img.freepik.com/free-psd/discord-logo-3d-social-media-icon-isolated_47987-11941.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="md:flex text-start justify-around ">
          <div className="flex flex-col ">
            <p className="text-orange-500 font-semibold py-6">COMPANY</p>
            <Link>About</Link>
            <Link className="my-1">Careers</Link>
            <Link>Brand Center</Link>
            <Link className="my-1"> Blog</Link>
          </div>
          <div className="flex flex-col ">
            <p className="text-orange-500 font-semibold py-6">HELP CENTER</p>
            <Link>Discord Server</Link>
            <Link className="my-1">Twitter</Link>
            <Link>Facebook</Link>
            <Link className="my-1"> Contact Us</Link>
          </div>
          <div className="flex flex-col ">
            <p className="text-orange-500 font-semibold py-6">LEGAL</p>
            <Link>Privacy Policy</Link>
            <Link className="my-1">Licensing</Link>
            <Link>Terms & Conditions</Link>
          </div>
          <div className="flex flex-col ">
            <p className="text-orange-500 font-semibold py-6">DOWNLOAD</p>
            <Link>iOS</Link>
            <Link className="my-1">Android</Link>
            <Link>Windows</Link>
            <Link className="my-1"> MacOS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
