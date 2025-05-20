const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Designed & built using React & Typescript
        </p>
      </div>
    </footer>
  );
};

export default Footer;