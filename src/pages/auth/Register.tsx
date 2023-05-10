import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Avatar, Divider } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


function Register() {
  return (
    <div className=" max-w-[430px] flex-grow text-black py-5 px-10" style={{ border : '1px solid rgba(0,0,0,0.2)' }}>
        
        <center>
            <h2 className=" text-xl font-medium mb-10">Create account</h2>
        </center>

        <TextField size="small" placeholder='Full name' fullWidth className=' text-white' id="outlined-basic" variant="outlined" /><br /><br/>
        <TextField size="small" placeholder='Email' fullWidth className=' text-white' id="outlined-basic" variant="outlined" /><br /><br/>
        <TextField size="small" placeholder='Phone' fullWidth className=' text-white' id="outlined-basic" variant="outlined" /><br /><br/>
        <TextField size="small" type='password' placeholder='Password' fullWidth className=' text-white' id="outlined-basic" variant="outlined" />

        {/* <div className='flex w-full justify-between mt-4'>
            <FormControlLabel className='my-auto' control={<Checkbox defaultChecked />} label="Remember me" />
            <label className='my-auto'>Reset password</label>
        </div> */}

        <button className='mt-5 mb-8 bg-[#0062E1] h-[34px] flex items-center justify-center w-full text-white'>Sign up</button>

        <Divider  />

        <div className='mb-5'></div>

        <center><label className=' text-gray-500' >Sign up with your social media account.</label></center>

        <div className='mb-5 flex w-full justify-center gap-3 mt-3'>

            <Avatar className='cursor-pointer' sx={{ bgcolor: '#1D3B7A' }}>
                <FacebookIcon />
            </Avatar>

            <Avatar className='cursor-pointer' sx={{ bgcolor: '#BD2619' }}>
                <GoogleIcon />
            </Avatar>

        </div>

        <Divider  />

        <div className='mt-5'>
            <center>Already have an account?</center>
        </div>

        <button className='mt-4 mb-8 bg-white h-[34px] flex items-center justify-center w-full text-black'>Sign in</button>


    </div>
  )
}

export default Register