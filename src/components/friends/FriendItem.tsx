import Avatar from '@mui/material/Avatar';
import FriendsMenu from '../menus/FriendsMenu';

function FriendItem() {
  return (
    <div className='p-5 flex justify-between' style={{ borderBottom : '1px solid rgba(255,255,255,0.1)' }}>
      <div className='flex my-auto'>
          <Avatar>N</Avatar>
          <div className='ml-3'>
            <h3 className='font-medium'>Byrom Guittet</h3>
            <label className=' text-slate-500'>Chemical Engineer</label>
          </div>
      </div>
      <FriendsMenu />
    </div>
  )
}

export default FriendItem