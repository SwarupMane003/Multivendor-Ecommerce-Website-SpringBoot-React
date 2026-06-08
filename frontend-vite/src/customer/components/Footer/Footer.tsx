import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 brand-dark-band py-12">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="max-w-md">
            <h5 className="logo text-3xl text-white">ShopSphere</h5>
            <p className="text-sm mt-3 text-pink-100 leading-7">
              A curated multi-vendor shopping experience for customers, sellers, and admins.
            </p>
            <p className="text-sm mt-5 text-pink-100">
              Copyright {new Date().getFullYear()} ShopSphere. All rights reserved.
            </p>
          </div>

          <div>
            <p className="font-bold text-white mb-4">Company</p>
            <ul className="grid gap-3 text-pink-100">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="max-w-sm">
            <p className="font-bold text-white mb-4">Support</p>
            <p className="text-pink-100 leading-7 text-sm">
              Need help with orders, seller onboarding, or product listings? Reach us from the contact page and the team will guide you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
