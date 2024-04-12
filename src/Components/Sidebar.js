import leftArrow from '../Images/h-Close.svg';
import home from '../Images/Sidebar Items/home-image.svg'
import noteImg from '../Images/Sidebar Items/note-image.svg'
import workspaceImg from '../Images/Sidebar Items/workspace-image.svg'
import searchIcon from '../Images/Sidebar Items/search-image.svg'
import settingsIcon from '../Images/Sidebar Items/settings-image.svg'
import addIcon from '../Images/Sidebar Items/add-notes.svg'

export default function Sidebar({showSideBar , setSideBarShow}){
    const handleChange = () => {
        setSideBarShow(prevState => !prevState)
    }
    return (       
       <nav className="flex flex-col h-screen max-w-80 min-w-80 bg-neutral-100 m-0 drop-shadow-lg ">
           <div className='h-15 max-h-15 flex items-center justify-between p-2'>
                <span className='cursor-default'>UserName</span>
                <img
                        src={leftArrow}
                        alt='Sidebar Menu'
                        className='h-10 hover:bg-neutral-200 drop-shadow-lg '
                        onClick={handleChange}
                    />
           </div>
           <ul className='pt-2'>
            <li> 
                <div className='flex items-center gap-3 min-h-10 hover:bg-gray-200'>
                    <img src={searchIcon} alt='Search' className='h-5 ps-3'/>
                    <span className='cursor-default'>Search</span>
                </div>
             </li>
             <li> 
                <div className='flex items-center gap-3 min-h-10 hover:bg-gray-200'>
                    <img src={home} alt='Home' className='h-5 ps-3'/>
                    <span className='cursor-default'>Home</span>
                </div>
             </li>
             <li>
                <div className='flex items-center gap-3 min-h-10 hover:bg-gray-200'>
                            <img src={settingsIcon} alt='Settings' className='h-5 ps-3'/>
                            <span className='cursor-default'>Settings</span>
                </div>
             </li>
             <li>
                <div className='flex items-center gap-3 min-h-10 hover:bg-gray-200'>
                            <img src={addIcon} alt='Add Notes' className='h-5 ps-3'/>
                            <span className='cursor-default'>Add Notes</span>
                </div>
             </li>
             <li>
                <div className='flex items-center gap-3 min-h-10 hover:bg-gray-200'>
                            <img src={workspaceImg} alt='Note' className='h-5 ps-3'/>
                            <span className='cursor-default'>Workspace</span>
                </div>
             </li>
             <li> 
                <div className='flex items-center h-10 gap-3 min-h-10 hover:bg-gray-200'>
                        <img src={noteImg} alt='Note' className='h-5 ps-3'/>
                        <span className='cursor-default'>Notes</span>
                </div>
             </li>            
           </ul>

       </nav> 
    )
}