import footerData from "../data/footerData.json";

const Footer = () => {
  const { socials, contact } = footerData;

  return (
    <footer id="footer" className="bg-gray-800 text-white py-10 px-4 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p>Email us at: <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline">
              {contact.email}
            </a></p>
          <p className="mt-2">Phone: {contact.phone}</p>
          <p className="mt-2">Address: {contact.address}</p>
          <p className="mt-2">Business Hours: {contact.businessHours}</p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Follow us on:</h4>
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <a key={index} href={social.link} aria-label={social.name} className="hover:opacity-75">
                <img src={social.icon} alt={social.name} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 bg-gray-700 py-4">
        copyright &copy; 2025 Offshore Architects
      </div>
    </footer>
  );
};

export default Footer;
