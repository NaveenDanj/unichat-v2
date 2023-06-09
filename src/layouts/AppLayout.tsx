import ChatView from '../components/ChatView';
import ArchiveSection from '../components/archive/ArchiveSection';
import ChatSection from '../components/chats/ChatSection';
import FriendsSection from '../components/friends/FriendsSection';
import SidebarLeft from '../components/layout/SidebarLeft';
import SidebarRight from '../components/layout/SidebarRight';


import { useSelector, useDispatch } from 'react-redux'
import { setRoute } from '../store/app/RouteSlice'
import type { RootState } from '../store/store'
import { useEffect } from 'react';
import FavouriteSection from '../components/favourite/FavouriteSection';



function AppLayout() {

    const route = useSelector((state: RootState) => state.router.currentRoute) 
    const sidebarOpen = useSelector((state: RootState) => state.router.sidebarOpen) 

    useEffect(() => {
        console.log(route)
    } , [route])

    return (
        <div className="flex h-[100vh] bg-[#1A2236] w-full">
            
            <div className="flex h-[100vh]  flex-col w-24 bg-[#1A2236]" style={{ borderRight : '1px solid rgba(255,255,255,0.1)' }}>
                <SidebarLeft />
            </div>

            <div className="w-[350px] bg-[#1A2236]" style={{ borderRight : '1px solid rgba(255,255,255,0.1)' }}>
                { route === 'chat' && (<ChatSection />) }
                { route === 'contact' && (<FriendsSection />) }
                { route === 'favourite' && (<FavouriteSection />) }
                { route === 'archived' && (<ArchiveSection />) }
            </div>

            <div className='flex flex-grow'>
                <ChatView />
            </div>

            {sidebarOpen && (
                <div className='w-[350px]' style={{ borderLeft : '1px solid rgba(255,255,255,0.1)' }}>
                    <SidebarRight />
                </div>
            )}

        </div>
    )
}

export default AppLayout