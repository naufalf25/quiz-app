import AuthNav from './AuthNav';

const Navbar = () => {
  return (
    <header className="py-6 px-4 shadow-md flex justify-between items-center md:px-10">
      <a
        href="/"
        className="font-bold text-xl uppercase font-pacifico text-purple1 md:text-2xl"
      >
        Answer Me!
      </a>
      <AuthNav />
    </header>
  );
};

export default Navbar;
