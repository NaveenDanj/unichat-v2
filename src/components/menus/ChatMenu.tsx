import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function ChatMenu() {

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
            <div onClick={handleClick} style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="my-auto ml-4 mt-1 flex justify-center w-[46px] cursor-pointer rounded-md  hover:bg-slate-700 h-[36px] items-center">
                <MoreHorizIcon style={{ width: 20 }} />
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
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Add to archive</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <label className=' text-pink-600'>Block</label>
                    </MenuItem>
                </Menu>
            </ThemeProvider>

        </>
    )
}

export default ChatMenu