import { useState } from 'react'
import Sidebar from './Sidebar';

const Aside = () => {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);
  return (
    <div className="relative min-h-screen md:flex">
      {/* sidemenu */}
      <Sidebar setExpand={setSideMenuIsExpand} />
      {/* content */}
      <div
        className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
          sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
        }`}
      >
      </div>
    </div>
  )
}

export default Aside
