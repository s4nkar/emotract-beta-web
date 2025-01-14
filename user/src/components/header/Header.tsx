import "./Header.css";
import { Input } from "../ui/input";
import { ModeToggle } from "../mode-toggle";
import { useToggle } from "@/hooks/useToggle";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

function Header() {
  const { handleHoverExpand } = useToggle();

  const handleHamburger = () => {
    handleHoverExpand(true);
  };

  return (
    <header className="chat-header w-full h-20 custom-gradient z-0 dark:bg-custom-dark">
      {/* Search Section */}
      <div className="flex items-center w-[80%] h-20 bg-white dark:bg-custom-dark">
        <Input
          placeholder="Search contact or message"
          className="hidden md:flex w-1/3 rounded-2xl ml-3 focus:outline-none text-gray-600 placeholder:text-gray-400 placeholder:line-clamp-1 placeholder:text-xs text-xs h-8 dark:text-gray-200 dark:placeholder:text-gray-500"
        />
        <Button
          className="block md:hidden ml-4 bg-transparent text-gray-600 dark:text-gray-200"
          variant={"secondary"}
          onClick={handleHamburger}
        >
          <Menu />
        </Button>
      </div>

      {/* Right Section */}
      <div className="right-section pr-2 md:pr-10 w-[20%] h-20 relative flex justify-end dark:bg-custom-dark">
        <div className="bg-white h-20 w-20 custom-shape absolute left-[-35px] dark:bg-custom-dark"></div>
        <div className="flex justify-center items-center gap-2">
          <div className="h-7 w-7 mr-2 z-10">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
