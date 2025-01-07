import { useToggle } from '@/hooks/useToggle';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

const Aside = () => {
  const { sideMenuIsExpand, isExpandOnHover } = useToggle();

  return (
    <div 
      className={cn(!isExpandOnHover && "hidden", "relative min-h-screen md:flex z-10")}
    >
      {/* sidemenu */}
      <Sidebar/>
      {/* content */}
      <div
        className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out  ${
          sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
        }`}
      >
      </div>
    </div>
  )
}

export default Aside
