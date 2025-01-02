const ContactCard = () => {
  return (
    <button className="flex items-center pl-2 w-full justify-between py-3 aside-bg-horizontaly">
        <img
        src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
        alt="Fabindia Limited avatar"
        className="w-11 h-11 rounded-full object-cover border-white border-2"
        />
    <div className="flex-1 mx-4">
        <div className="flex justify-between items-center pr-2">
            <span className="text-sm capitalize font-semibold text-gray-800 text-[.9rem]">Nicolas Klaus</span>
            <span className="text-xs text-gray-500">18:03</span>
        </div>
        <div className="flex justify-between items-center pr-2">
            <p className="text-sm text-gray-600 truncate max-w-36">Wsp guys</p>
            <span
            className="w-4 h-4 flex items-center justify-center rounded-full text-sm font-semibold text-[.8rem]"
            style={{ backgroundColor: "#3B82F6", color: "white" }}
          >
            1
          </span>
        </div>
      {/* <div className="flex justify-between">
        <h3 className="text-md font-medium">User Name</h3>
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-500">18:03</span>
          <span
            className="w-5 h-5 mt-1 flex items-center justify-center rounded-full text-sm font-semibold"
            style={{ backgroundColor: "#3B82F6", color: "white" }}
          >
            1
          </span>
        </div>
      </div> */}
      {/* <p className="text-sm text-gray-600 truncate">hello...</p> */}
    </div>
  </button>
  )
}

export default ContactCard
