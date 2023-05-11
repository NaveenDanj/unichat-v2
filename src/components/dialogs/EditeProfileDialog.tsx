import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  Avatar, Checkbox, FormControlLabel, FormGroup, IconButton, MenuItem, Switch, Tab, Tabs, TextField } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});


export default function EditeProfileDialog() {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const stopPropagationForTab = (event:any) => {
    if (event.key === "Tab") {
      event.stopPropagation();
    }
  };

  return (
    <div>

      <MenuItem onClick={handleClickOpen}>Edit Profile</MenuItem>

      <ThemeProvider theme={darkTheme}>
        
        <Dialog
          onKeyDown={stopPropagationForTab}
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
              <SettingsIcon className='my-auto' style={{ width: 20 }} />
              <label className='my-auto ml-2'>Edit Profile</label>
            </div>

            <IconButton onClick={handleClose} className='my-auto' size="small">
              <CloseIcon />
            </IconButton>

          </DialogTitle>


          <DialogContent className='bg-[#1A2236]'>
              
            <DialogContentText className='px-2 pt-6'  id="alert-dialog-description">

              <TabContext value={value}>
                              
                <Tabs value={value} textColor="secondary" onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Personal" value={'1'} />
                  <Tab label="About" value={'2'}  />
                </Tabs>
                  
                <TabPanel className='' value="1">
                    
                    <div className=''>
                        <label className='text-xs'>Username or email</label>
                        <TextField size="small" type='email'  placeholder='Username or email' fullWidth className='text-white' id="outlined-basic" variant="outlined" />
                    </div>
                    
                    <div className='mt-5'>
                        <label className=' text-xs mb-3'>Avatar</label>
                        <div className='flex w-full gap-4'>
                            <Avatar>A</Avatar>
                            <TextField size="small" type='email'  placeholder='Username or email' fullWidth className='text-white' id="outlined-basic" variant="outlined" />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label className='text-xs'>City</label>
                        <TextField size="small" type='email'  placeholder='Ex: Columbia' fullWidth className='text-white' id="outlined-basic" variant="outlined" />
                    </div>

                    <div className='mt-5'>
                        <label className='text-xs'>Phone</label>
                        <TextField size="small" type='email'  placeholder='(555) 555 55 55' fullWidth className='text-white' id="outlined-basic" variant="outlined" />
                    </div>

                    <div className='mt-5'>
                        <label className='text-xs'>Website</label>
                        <TextField size="small" type='email'  placeholder='http://' fullWidth className='text-white' id="outlined-basic" variant="outlined" />
                    </div>

                    <div className='flex w-full justify-end mt-8'>
                        <Button variant='contained' onClick={handleClose} autoFocus>
                            <label className='text-white'>Save</label>
                        </Button>
                    </div>

                </TabPanel>
                  
                <TabPanel className='' value="2">
                    <div className=''>
                        <label className='text-xs'>Write a few words that describe you</label>
                        <TextField size="small" type='email' multiline rows={4} fullWidth className='text-white' id="outlined-basic" variant="outlined" />
                    </div>

                    <div className='mt-3'>
                        <FormControlLabel control={<Checkbox size='small' defaultChecked />} label="View profile" />
                    </div>

                    <div className='flex w-full justify-end mt-8'>
                        <Button variant='contained' onClick={handleClose} autoFocus>
                            <label className='text-white'>Save</label>
                        </Button>
                    </div>

                </TabPanel>

              </TabContext>

            </DialogContentText>

          </DialogContent>

          <DialogActions className='pr-5 bg-[#1A2236]'>
                          
            {/* <Button variant='contained' onClick={handleClose} autoFocus>
              <label className='text-white'>Save</label>
            </Button> */}

          </DialogActions>

        </Dialog>

      </ThemeProvider>

    </div>
  );
}