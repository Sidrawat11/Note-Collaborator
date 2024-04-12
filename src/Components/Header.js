import Logo from '../Images/Logo.png';
import userLogo from '../Images/userLogo.svg';
import hamburger from '../Images/hamLogo.svg';


export default function Header({showSideBar , openSidebar}) {   
    const handleChange = () => {
        openSidebar();
    };
    return (
        <div className='flex'>           
                <header className="w-full flex items-center justify-between max-h-16 bg-neutral-100 pe-2 ps-0 py-2">
                    {console.log(showSideBar)}
                    {!showSideBar && <img
                        src={hamburger}
                        alt='Sidebar Menu'
                        className='h-10 hover:bg-neutral-200'
                        onClick={handleChange}
                    />}                    
                    <div className="flex justify-center items-center gap-1">
                        <img src={Logo} alt='Logo for the APP' className='h-10' />
                        <span className='cursor-default'>A Notes Collaborator</span>
                    </div>
                    <div className={`flex justify-center items-center gap-1 bg-gray-300 p-2 rounded-full`}>
                        <img src={userLogo} alt='User' className='h-6' />
                    </div>
                </header>
        </div>
    );
}
