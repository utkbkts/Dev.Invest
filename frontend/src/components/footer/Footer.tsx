const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Your Company</h2>
          <p className="mt-2 text-sm">
            We strive to deliver the best experience for our users.
          </p>
        </div>
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/" className="hover:underline transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
