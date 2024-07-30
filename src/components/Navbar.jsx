import AuthNav from './AuthNav';

const Navbar = () => {
  return (
    <header className="py-6 px-10 shadow-md flex justify-between items-center">
      <h1 className="font-bold text-2xl uppercase font-pacifico text-purple1">
        Answer Me!
      </h1>
      <AuthNav login="false" />
    </header>
  );
};

export default Navbar;
