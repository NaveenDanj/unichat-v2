import { ThemeProvider, createTheme } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import React from 'react';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});



function SidebarRight() {

    const [value, setValue] = React.useState('1');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="w-full h-full overflow-y-auto">
                
            <div className="pt-5 px-8 flex justify-between w-full">
                <h2 className=" font-medium my-auto text-2xl">Profile</h2>
                <div className='flex'>
                    <div style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="my-auto ml-4 mt-1 flex justify-center w-[46px] cursor-pointer rounded-md  hover:bg-slate-700 h-[36px] items-center">
                        <CloseIcon style={{ width: 20 }} />
                    </div>
                </div>
            </div>

            <div className='mt-3 flex flex-col'>
                
                <div className='flex justify-center'>
                    <Avatar sx={{ width : 90 , height : 90 }}>N</Avatar>
                </div>

                <center>
                    <div className='flex justify-center mt-5 flex-col'>
                        <h2 className=" font-medium my-auto text-2xl">Mirabelle Tow</h2>
                        <label className=' text-sm text-slate-500'>Last seen: Today</label>
                    </div>
                </center>

            
                <div className='mt-8 flex flex-col w-full'>
                    <div>

                        <ThemeProvider theme={darkTheme}>

                            <TabContext value={value}>
                                
                                <Tabs textColor="secondary" onChange={handleChange} aria-label="basic tabs example" centered>
                                    <Tab label="About" value={'1'} />
                                    <Tab label="Media" value={'2'}  />
                                </Tabs>
                                
                                <TabPanel className='' value="1">
                                    
                                    <p className=' text-slate-400'>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.</p>

                                    <div className='mt-5'>
                                        <h3 className="font-medium my-auto text-lg">Phone</h3>
                                        <label className=' text-slate-500 font-medium'>(555) 555 55 55</label>
                                    </div>

                                    <div className='mt-5'>
                                        <h3 className="font-medium my-auto text-lg">City</h3>
                                        <label className=' text-slate-500 font-medium'>Germany / Berlin</label>
                                    </div>

                                    <div className='mt-5'>
                                        <h3 className="font-medium my-auto text-lg">Website</h3>
                                        <label className=' text-slate-500 font-medium'>www.franshanscombe.com</label>
                                    </div>

                                    <div className='mt-5'>
                                        <h3 className="font-medium my-auto text-lg">Settings</h3>
                                        <FormGroup>
                                            <FormControlLabel control={<Switch />} label="Block" />
                                            <FormControlLabel control={<Switch />} label="Mute" />
                                        </FormGroup>
                                    </div>

                                </TabPanel>
                                
                                <TabPanel className='bg-red-500' value="2">Item two</TabPanel>

                            </TabContext>

                        </ThemeProvider>

                    </div>
                </div>

                <div>

                </div>

            </div>
        
        </div>
    )
}

export default SidebarRight