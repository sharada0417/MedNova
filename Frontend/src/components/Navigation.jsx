

function Navigation() {
  
  return (
   <nav className="flex  items-center justify-between px-6 py-4 bg-gray-100">
      {/* Logo */}
      <div className="text-xl font-bold">
        <a href="/">
        <span className="text-black">Med</span>
        <span className="text-blue-600">Nova</span>
        </a>
      </div>

      {/* Links */}
      <div className="flex space-x-6">
        <a href="/Home" className="Hover:text-blue-600 active:text-blue-600">Home</a>
        <a href="/doctor" className="Hover:text-blue-600 active:text-blue-600">Find Doctor</a>
        <a href="/service" className="Hover:text-blue-600 active:text-blue-600">Services</a>
        <a href="/contact" className="Hover:text-blue-600 active:text-blue-600">Contact Us</a>
      </div>

      {/* Button */}
      <div className="flex space-x-3">
        <button className="bg-[#09D8E7] text-xs text-yellow-50 py-2 px-2 ">
          Get Appointment
        </button>
         <button className="bg-[#000a0a] text-xs text-yellow-50 py-2 px-2 ">
          SignIn
        </button>
         <button className="bg-[#010808] text-xs text-yellow-50 py-2 px-2 ">
          SignUp
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
