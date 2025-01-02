interface ContactCardProps{
    message_count?: number;
}

const ContactCard = ({  message_count = 0 }:ContactCardProps) => {
    return (
        <button className="flex items-center pl-2 w-full justify-between py-3 aside-bg-horizontaly group">
            <img
            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            alt="Fabindia Limited avatar"
            className="w-11 h-11 rounded-full object-cover border-white border-2"
            />
            <div className="flex-1 mx-4">
                <div className="flex justify-between items-center pr-2">
                    <span className="text-sm capitalize font-semibold text-gray-800 group-focus:text-white text-[.9rem]">Nicolas Klaus</span>
                    <span className="text-xs text-gray-500 group-focus:text-white">18:03</span>
                </div>
                <div className="flex justify-between items-center pr-2">
                    <p className="text-sm text-gray-600 group-focus:text-[#e3e3e3] truncate max-w-36">Wsp guys</p>
                    {message_count > 0 && (<span
                        className="w-4 h-4 flex items-center justify-center rounded-full text-[.7rem] p-2"
                        style={{ backgroundColor: "#3B82F6", color: "white" }}
                    >
                    {message_count}
                    </span>)}
                </div>
            </div>
    </button>
    )
}

export default ContactCard
