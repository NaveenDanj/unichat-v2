import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function FavouriteItem() {
  return (
    <div className='p-5 flex justify-between' style={{ borderBottom : '1px solid rgba(255,255,255,0.1)' }}>
        <div className='flex my-auto'>
            {/* <Avatar>N</Avatar> */}
            <div className='ml-3'>
                <h3 className='font-medium'>Byrom Guittet</h3>
                <label className=' text-slate-500'>Chemical Engineer</label>
            </div>
        </div>

        <div style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="my-auto ml-4 mt-1 flex justify-center w-[46px] cursor-pointer rounded-md  hover:bg-slate-700 h-[36px] items-center">
            <MoreHorizIcon style={{ width: 20 }} />
        </div>

    </div>
  )
}

export default FavouriteItem