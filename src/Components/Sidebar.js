import leftArrow from '../Images/h-Close.svg';
export default function Sidebar({showSideBar , setSideBarShow}){
    const handleChange = () => {
        setSideBarShow(prevState => !prevState)
    }
    return (       
       <nav className="flex flex-col h-screen max-w-80 min-w-80 bg-neutral-100 m-0 drop-shadow-lg ">
           <div className='min-h-16 flex items-center justify-between p-2'>
                <span>UserName</span>
                <img
                        src={leftArrow}
                        alt='Sidebar Menu'
                        className='h-10 hover:bg-neutral-200'
                        onClick={handleChange}
                    />
           </div>
           <ul className='p-2'>
             <li>Home</li>
             <li>Notes</li>
             <li>Workspace</li>
           </ul>
       </nav> 
    )
}