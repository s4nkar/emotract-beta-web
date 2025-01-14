import { useNavigate } from "react-router-dom";
interface ContactCardProps{
    id: string;
    name: string;
    last_message?: string;
    message_count: number;
    time: string;
  }

const ContactCard = ({  
    message_count = 0,
    name,
    last_message,
    id,
    time,
 }:ContactCardProps) => {

    const navigate = useNavigate();
    return (
        <button 
            onClick={()=> navigate(`/home/${id}`)}
            className="flex items-center pl-0 md:pl-2 w-full justify-center md:justify-between py-3 aside-bg-horizontaly hover:bg-[#e8eafd]  dark:hover:bg-[#1F1F1F] group bg-[#e0e1ff] dark:bg-[#121013] dark:text-white focus:bg-[#9a9deb] dark:focus:bg-[#1F1F1F]">
            <img
            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            alt="Fabindia Limited avatar"
            className="w-11 h-11 rounded-full object-cover border-white border-2"
            />
            <div className="flex-1 mx-4 hidden md:block w-[60%]">
                <div className="flex justify-between items-center">
                    <span className="text-sm capitalize font-semibold text-gray-800 group-focus:text-white text-[.9rem] truncate max-w-[80%] dark:text-[#E0E0E0] ">{name}</span>
                    <span className="text-xs text-gray-500 group-focus:text-white dark:text-[#9AA6B2]">{time}</span>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-sm text-gray-600 group-focus:text-[#e3e3e3] truncate max-w-[90%] dark:text-[#9AA6B2] ">{last_message}</p>
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
