import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ChatHeader() {
  return (
    <div className='flex justify-between h-[100px] w-full' style={{ borderBottom : '1px solid rgba(255,255,255,0.1)' }}>
        <div className='flex my-auto ml-10'>
            <Avatar>N</Avatar>
            <div className='ml-3'>
                <h3 className='font-medium'>Byrom Guittet</h3>
                <label className=' text-green-600 text-xs'>writing...</label>
            </div>
        </div>

        <div className='mr-8 '>
            <div className='flex justify-center mt-4'>
                <div style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="my-auto flex justify-center w-[46px] cursor-pointer rounded-md hover:bg-slate-700 h-[36px] items-center">
                    <MoreHorizIcon style={{ width: 20 }} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default ChatHeader