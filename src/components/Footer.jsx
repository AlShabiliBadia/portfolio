function Footer() {
  return (
    <footer className="py-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
      <p className="text-xl text-gray-300 mt-4 max-w-lg mx-auto">
        I'm currently open to new opportunities. Let's connect.
      </p>
      
      <div className="flex gap-4 mt-8 justify-center">
        <a
          href="mailto:badiaalshabili@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/badia-al-shabili-792863305/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          View LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
