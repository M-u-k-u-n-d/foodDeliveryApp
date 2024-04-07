import { LOGO_URL } from "../utils/constants";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <img src={LOGO_URL} alt="Swiggy logo" className="w-20 mb-4" style={{ filter: 'invert(100%)' }} />
          <p className="text-sm">© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact us</h4>
          <ul className="text-sm">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">We deliver to:</h4>
          <ul className="text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>589 cities</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
