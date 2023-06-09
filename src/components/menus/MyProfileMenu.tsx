import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import SettingsDialog from '../dialogs/SettingsDialog';
import EditeProfileDialog from '../dialogs/EditeProfileDialog';


import { useDispatch } from 'react-redux'
import { setSidebarOpen } from '../../store/app/RouteSlice'


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function MyProfileMenu() {
    const dispatch = useDispatch(); 
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div onClick={handleClick} className="p-3 flex justify-center w-[60px] cursor-pointer rounded-md hover:bg-slate-700 items-center">
                <Avatar>N</Avatar>
            </div>
            
            <ThemeProvider theme={darkTheme}>
                <Menu
                    PaperProps={{  
                        style: {  
                          width: 150,
                          borderRadius : 5
                        },
                    }}
                    open={open}
                    onClose={handleClose}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    // transformOrigin={{
                    //     vertical: 'bottom',
                    //     horizontal: 'left',
                    // }}
                    
                >
                    <EditeProfileDialog />
                    <MenuItem onClick={() => dispatch(setSidebarOpen(true))}>Profile</MenuItem>
                    <SettingsDialog />
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <label className=' text-pink-600'>Logout</label>
                    </MenuItem>
                </Menu>
            </ThemeProvider>

        </>
    )
}

export default MyProfileMenu