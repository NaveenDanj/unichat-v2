import ChatView from '../components/ChatView';
import ChatSection from '../components/chats/ChatSection';
import FriendsSection from '../components/friends/FriendsSection';
import SidebarLeft from '../components/layout/SidebarLeft';


function AppLayout() {
  return (
    <div className="flex h-[100vh] bg-[#1A2236] w-full">
        
        <div className="flex h-[100vh]  flex-col w-24 bg-[#1A2236]" style={{ borderRight : '1px solid rgba(255,255,255,0.1)' }}>
            <SidebarLeft />
        </div>

        <div className="w-[350px] bg-[#1A2236]" style={{ borderRight : '1px solid rgba(255,255,255,0.1)' }}>
            {/* <ChatSection /> */}
            <FriendsSection />
        </div>

        <div className='flex flex-grow'>
            <ChatView />
        </div>

        <div className='w-[350px]' style={{ borderLeft : '1px solid rgba(255,255,255,0.1)' }}>

        </div>

    </div>
  )
}

export default AppLayout