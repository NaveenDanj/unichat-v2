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
import {  FormControlLabel, FormGroup, IconButton, MenuItem, Switch, Tab, Tabs } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});


export default function SettingsDialog() {
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

      <MenuItem onClick={handleClickOpen}>Settings</MenuItem>

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
              <label className='my-auto ml-2'>Settings</label>
            </div>

            <IconButton onClick={handleClose} className='my-auto' size="small">
              <CloseIcon />
            </IconButton>

          </DialogTitle>


          <DialogContent className='bg-[#1A2236]'>
              
            <DialogContentText className='px-2 pt-6'  id="alert-dialog-description">

              <TabContext value={value}>
                              
                <Tabs value={value} textColor="secondary" onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Account" value={'1'} />
                  <Tab label="Notification" value={'2'}  />
                  <Tab label="Security" value={'3'}  />
                </Tabs>
                  
                <TabPanel className='' value="1">
                  <FormGroup>
                    <FormControlLabel control={<Switch />} label="Allow connected contacts" />
                    <FormControlLabel control={<Switch />} label="Confirm message requests" />
                    <FormControlLabel control={<Switch />} label="Profile privacy" />
                    <FormControlLabel control={<Switch />} label="Developer mode options" />
                    <FormControlLabel control={<Switch />} label="Two-step security verification" />
                  </FormGroup>
                </TabPanel>
                  
                <TabPanel className='' value="2">
                  <FormGroup>
                    <FormControlLabel control={<Switch />} label="Allow mobile notifications" />
                    <FormControlLabel control={<Switch />} label="Notifications from your friends" />
                    <FormControlLabel control={<Switch />} label="Send notifications by email" />
                  </FormGroup>
                </TabPanel>

                <TabPanel className='' value="3">
                  <FormGroup>
                    <FormControlLabel control={<Switch />} label="Suggest changing passwords every month." />
                  </FormGroup>
                </TabPanel>

              </TabContext>

            </DialogContentText>

          </DialogContent>

          <DialogActions className='pr-5 bg-[#1A2236]'>
                          
            <Button variant='contained' onClick={handleClose} autoFocus>
              <label className='text-white'>Save</label>
            </Button>

          </DialogActions>

        </Dialog>

      </ThemeProvider>

    </div>
  );
}