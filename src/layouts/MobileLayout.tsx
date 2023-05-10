import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonIcon from '@mui/icons-material/Person';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArchiveIcon from '@mui/icons-material/Archive';
import ChatSection from '../components/chats/ChatSection';
import ChatView from '../components/ChatView';
import FriendsSection from '../components/friends/FriendsSection';


function MobileLayout() {
  return (
    <div className='flex flex-col w-full h-[100vh] bg-[#1A2236]'>
        
        <div className='flex flex-grow overflow-auto'>
            <ChatSection />
            {/* <FriendsSection /> */}
            {/* <ChatView /> */}
        </div>

        <div className='flex justify-between w-full h-16  items-center p-2' style={{ borderTop : '1px solid rgba(255,255,255,0.1)' }}>
            
            <div className="flex justify-center w-[60px] cursor-pointer rounded-md bg-slate-800 hover:bg-[#0A80FF] h-[48px] items-center">
                <ChatBubbleOutlineIcon style={{ width: 20 }} />
            </div>

            <div className="flex justify-center w-[60px] cursor-pointer rounded-md bg-slate-800 hover:bg-[#0A80FF] h-[48px] items-center">
                <PersonIcon style={{ width: 20 }} />
            </div>

            <div className="flex justify-center w-[60px] cursor-pointer rounded-md bg-slate-800 hover:bg-[#0A80FF] h-[48px] items-center">
                <StarBorderIcon style={{ width: 20 }} />
            </div>

            <div className="flex justify-center w-[60px] cursor-pointer rounded-md bg-slate-800 hover:bg-[#0A80FF] h-[48px] items-center">
                <ArchiveIcon style={{ width: 20 }} />
            </div>

        </div>

    </div>
  )
}

export default MobileLayout