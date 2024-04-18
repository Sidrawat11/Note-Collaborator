import './App.css';
import Header from './Components/Header';
import Noteframe from './Components/Noteframe';  // Note: Noteframe is imported but not used in this snippet
import Sidebar from './Components/SideBar';

import { useState } from 'react';

function App() {
  const [showSideBar, setSideBarShow] = useState(false);
  const openSidebar = () => setSideBarShow(true);
  const closeSidebar = () => setSideBarShow(false);


  return (
    <div className="Parent flex flex-nowrap w-full h-screen"> 
      <div>
          <div className={`grow transition ease-in-out transform ${showSideBar ? "translate-x-0" : "-translate-x-full"} relative inset-y-0 left-0 m-0`}>
                {showSideBar && <Sidebar showSideBar={showSideBar} closeSidebar={closeSidebar}/>}
          </div>          
      </div>
      <div className='grow bg-green-400'>
        <Header showSideBar={showSideBar} openSidebar={openSidebar}/>   
        <div className='p-3 overflow-visible'>
              <Noteframe />
        </div>  
      </div>  
    </div>
  );
}

export default App;
