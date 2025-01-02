import "./Header.css";
import { Input } from "./ui/input";
function Header() {
  return (
      <header 
        className="chat-header w-full h-20 custom-gradient" 
        >
        {/* Search Section */}
        <div className="flex items-center w-[80%] bg-white h-20">
          <Input
            placeholder="Search contact, group, or message"
            className="w-[22%] rounded-2xl  ml-3 focus:outline-none text-gray-600"
          />
        </div>
        {/* Right Section */}
        <div className="right-section pr-10 w-[20%] h-20 relative flex justify-end custom-gradient">
        <div className="bg-white h-20 w-20 custom-shape absolute left-[-35px]"></div>
          <div className="flex items-center">
            <img
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
              alt="User Avatar"
              className="avatar"
            />
            <div className="user-name">
              <h4 className="m-0 text-[16px]">Sankar Dev</h4>
              <span className="text-[12px] user-status">Online</span>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
