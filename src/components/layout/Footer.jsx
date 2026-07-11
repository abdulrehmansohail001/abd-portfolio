function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Abdul Rehman Sohail. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
