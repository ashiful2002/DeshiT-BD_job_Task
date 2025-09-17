const MobileNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4 py-3 flex justify-between items-center md:hidden">
      <div className="font-bold text-lg">Desh-IT BD</div>
      <div className="space-x-4">
        <a href="#hero" className="text-gray-700">Home</a>
        <a href="#products" className="text-gray-700">Products</a>
      </div>
    </div>
  );
};

export default MobileNavbar;
