import "./Header.css";
import { Input } from "../ui/input";
import { ModeToggle } from "../mode-toggle";

function Header() {

  return (
      <header 
        className="chat-header w-full h-20 custom-gradient z-0" 
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
        <div className="flex justify-center items-center gap-2">
        {/* <div className="md:flex items-center hidden">
            <div className="user-name  flex flex-col justify-start items-start mt-0">
              <h4 className="m-0 font-semibold text-[1rem]">{user?.fullName}</h4>
              <span className="text-[.7rem] user-status mt-[-.4rem]">Online</span>
            </div>
          </div> */}
          <div className="h-7 w-7 mr-2">
            <ModeToggle />
          </div>
        </div>
        </div>
      </header>
  );
}

export default Header;
