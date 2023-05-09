import Avatar from '@mui/material/Avatar';

function ChatItem() {
  return (
    <div className='p-5 flex justify-between' style={{ borderBottom : '1px solid rgba(255,255,255,0.1)' }}>
        <div className='flex my-auto'>
            <Avatar>N</Avatar>
            <div className='ml-3'>
                <h3 className='font-medium'>Byrom Guittet</h3>
                <label className=' text-slate-500'>What's up, how are you?</label>
            </div>
        </div>

        <label className=' text-sm text-slate-500'>03:41 PM</label>

    </div>
  )
}

export default ChatItem