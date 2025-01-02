// import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Settings } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Aside = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleAsideOpen = () => {
    setIsAsideOpen(!isAsideOpen);
  };

    return (
        <motion.div 
        className="aside-bg flex flex-col h-screen"
        animate={{ width: isAsideOpen ? '170px' : '90px' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="h-1/2">
        <h2 className="text-white font-semibold text-center pt-2">Emotract</h2>
      </div>

      <div className="h-1/2 flex flex-col justify-end items-start pb-10 gap-7 relative">
        <span className="flex items-center w-full pl-7 gap-2">
          <Settings color="white" className="w-8 h-8" cursor="pointer" />
          <motion.p
            className="text-white font-semibold text-[1.2rem] overflow-hidden"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: isAsideOpen ? 1 : 0,
              width: isAsideOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Settings
          </motion.p>
        </span>
        <span className="flex items-center w-full pl-7 gap-2">
          <Menu
            onClick={handleAsideOpen}
            color="white"
            className="w-8 h-8"
            cursor="pointer"
          />
          <motion.p
            className="text-white font-semibold text-[1.2rem] overflow-hidden"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: isAsideOpen ? 1 : 0,
              width: isAsideOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Menu
          </motion.p>
        </span>
        <span className="flex items-center w-full pl-6">
          <ModeToggle />
        </span>
      </div>
    </motion.div>
  );
};

export default Aside;
