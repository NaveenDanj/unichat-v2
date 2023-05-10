import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Avatar, Divider } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


function ResetPasswordForm() {
  return (
    <div className=" max-w-[430px] flex-grow text-black py-5 px-10" style={{ border : '1px solid rgba(0,0,0,0.2)' }}>
        
        <center>
            <h2 className=" text-xl font-medium mb-10">Reset password</h2>
        </center>

        <TextField size="small" placeholder='Username or email' fullWidth className=' text-white' id="outlined-basic" variant="outlined" /><br /><br/>

        <button className='mt-0 mb-8 bg-[#0062E1] h-[34px] flex items-center justify-center w-full text-white'>Sign in</button>

        <Divider  />

        <div className='mt-5'>
            <center>Take a different action.</center>
        </div>

        <button className='mt-4 mb-8 bg-white h-[34px] flex items-center justify-center w-full text-black'>Sign up</button>


    </div>
  )
}

export default ResetPasswordForm