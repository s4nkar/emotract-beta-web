import { cn } from "@/lib/utils";
import { useState } from "react";

interface ChatProps {
  position: string;
}

const ChatScreen = ({ position }: ChatProps) => {
  const [isChatSubMenuOpen, setIsChatSubMenuOpen] = useState(false);
  return (
    <div
      className={cn(
        position === "right" && "flex-row-reverse",
        "flex items-start gap-2.5 my-4 first:mt-0 last:mb-0"
      )}
    >
      <img
        src="https://pbs.twimg.com/media/E8HSa0aUYAM1_xS.jpg"
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col w-full md:max-w-fit leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#181C14] dark:text-white">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-[#E0E0E0]">
            Bonnie Green
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            11:46
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-[#E0E0E0]">
          That's awesome. I think our users will really appreciate the
          improvements.
        </p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Delivered
        </span>
      </div>
      <div
        className="relative"
        onClick={() => setIsChatSubMenuOpen((prev) => !prev)}
      >
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          data-dropdown-placement="bottom-start"
          className="inline-flex self-center items-center p-2 text-sm font-medium text-center bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-transparent dark:hover:bg-gray-800 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 4 15"
          >
            <path
              d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div
          id="dropdownDots"
          className={cn(
            isChatSubMenuOpen ? "block" : "hidden",
            position === "left" ? "right-0" : "left-0",
            "z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
          )}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Reply
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Forward
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Copy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Report
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
