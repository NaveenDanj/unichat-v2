import Avatar from '@mui/material/Avatar';

function ChatItemMe() {
  return (
    <div className='w-full p-2 flex flex-col mt-5'>

        <div className='flex my-auto justify-end'>
            <Avatar>N</Avatar>
            <div className='ml-3 flex flex-col'>
                <label className='font-medium'>You</label>
                <label className='text-xs text-slate-500'>01:20 PM</label>
            </div>
        </div>

        <div className=' flex my-auto justify-end w-auto mt-4'>
            <div className=' flex-grow'></div>
            <div className='bg-[#0A80FF] p-2 rounded-md max-w-[804px]'>
                <p>Thank you so much. These files are very important to me. I guess you didn't make any changes to these files. So I need the original versions of these files. Thank you very much again.</p>
            </div>
        </div>

    </div>
  )
}

export default ChatItemMe