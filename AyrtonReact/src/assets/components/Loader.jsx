import Logo from "../images/media/logo.webp";

function Loader() {
  return (
    <div className="h-screen w-full bg-black fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden">
      <img
        src={Logo}
        className="flex items-center justify-between h-1/6 max-[640px]:h-[10%] w-1/5 max-sm:w-3/6 overflow-hidden animate-spin-slow"
      />
  <div className="absolute top-0 left-0 bg-gradient-to-r from-black to-transparent opacity-20 z-50 h-full w-full duration-500"/>
  </div>
  );
}

export default Loader;
