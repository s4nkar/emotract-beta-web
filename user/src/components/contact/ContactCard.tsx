interface ContactCardProps{
    message_count?: number;
}

const ContactCard = ({  message_count = 0 }:ContactCardProps) => {
    return (
        <button className="flex items-center pl-0 md:pl-2 w-full justify-center md:justify-between py-3 aside-bg-horizontaly  dark:hover:bg-[#1F1F1F] group dark:bg-custom-dark dark:text-white ">
            <img
            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            alt="Fabindia Limited avatar"
            className="w-11 h-11 rounded-full object-cover border-white border-2"
            />
            <div className="flex-1 mx-4 hidden md:block">
                <div className="flex justify-between items-center pr-2">
                    <span className="text-sm capitalize font-semibold text-gray-800 group-focus:text-white text-[.9rem] truncate max-w-20 dark:text-[#E0E0E0] ">Nicolas Klausssssssssssssss</span>
                    <span className="text-xs text-gray-500 group-focus:text-white dark:text-[#9AA6B2]">18:03</span>
                </div>
                <div className="flex justify-between items-center pr-2">
                    <p className="text-sm text-gray-600 group-focus:text-[#e3e3e3] truncate max-w-16 dark:text-[#9AA6B2] ">Wsp guys sssssssssssssssssssssssssssssssssssssssss</p>
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
