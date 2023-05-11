import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { Divider, IconButton } from '@mui/material';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});


export default function AddContactDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

        <div onClick={handleClickOpen} style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="my-auto ml-4 mt-1  flex justify-center w-[46px] cursor-pointer rounded-md  hover:bg-slate-700 h-[36px] items-center">
            <AddCircleOutlineIcon style={{ width: 20 }} />
        </div>
{/* 
        <div style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="my-auto ml-4 mt-1  flex justify-center w-[46px] cursor-pointer rounded-md  hover:bg-slate-700 h-[36px] items-center">
            <AddCircleOutlineIcon style={{ width: 20 }} />
        </div> */}
        <ThemeProvider theme={darkTheme}>
            <Dialog
                PaperProps={{  
                    style: {  
                      width: 500,
                      borderRadius : 5
                    },
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogTitle className='bg-[#0A80FF] flex justify-between'>
                    
                    <div className='flex my-auto'>
                        <AddCircleOutlineIcon className='my-auto' style={{ width: 20 }} />
                        <label className='my-auto ml-2'>Add Friends</label>
                    </div>

                    <IconButton onClick={handleClose} className='my-auto' size="small">
                        <CloseIcon />
                    </IconButton>

                </DialogTitle>


                <DialogContent>
                    
                    {/* <Alert className='mt-6 mx-2' severity="success">Send invitations to friends.</Alert> */}

                    <DialogContentText className='px-2 pt-6'  id="alert-dialog-description">
                        
                        <label className=' text-xs mb-3'>Username or email</label>
                        <TextField size="small" type='email' placeholder='Username or email' fullWidth className='mt-2 text-white' id="outlined-basic" variant="outlined" /><br /><br/>
                        <div className='mb-3'></div>
                        
                        <Divider />
                        <div className='mb-5'></div>
                        <center><label className='text-sm uppercase font-bold'>Or enter the invite code</label></center>

                        <div className='mb-10'></div>

                        <div className='flex w-full gap-2'>
                            <TextField size="small" type='email' placeholder='Enter the Invite code' fullWidth className='mt-2 text-white' id="outlined-basic" variant="outlined" /><br />
                            <Button className='ml-2 px-5' variant="outlined" endIcon={<AddIcon />}>
                                Add
                            </Button>
                        </div>
                        
                    </DialogContentText>

                </DialogContent>

                <DialogActions className='mr-3'>
                    
                    <Button onClick={handleClose}>CANCEL</Button>
                    
                    <Button onClick={handleClose} autoFocus>
                        Submit
                    </Button>

                </DialogActions>

            </Dialog>
        </ThemeProvider>

    </div>
  );
}