import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FavouriteItem from './FavouriteItem';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});


function FavouriteSection() {
  return (
    <div className="w-full h-full">

        <div>
            
            <div className="pt-5 px-8 flex justify-between w-full">
                <h2 className=" font-medium my-auto text-2xl">Favorites</h2>

                {/* <div className='flex'>
                    <div style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="my-auto ml-4 mt-1 flex justify-center w-[46px] cursor-pointer rounded-md  hover:bg-slate-700 h-[36px] items-center">
                        <SupervisorAccountIcon style={{ width: 20 }} />
                    </div>
                </div> */}

            </div>

            <div className="mt-10 px-8 flex justify-between w-full h-16">
                <ThemeProvider theme={darkTheme}>
                    <TextField size="small" placeholder='Search favourites' fullWidth className='my-auto  h-24 text-white' id="outlined-basic" variant="outlined" />
                </ThemeProvider>
            </div>

        </div>


        <div style={{ height : 'calc(100vh - 164px)' }} className='overflow-auto'>
            <FavouriteItem />
            <FavouriteItem />
            <FavouriteItem />
            <FavouriteItem />
            <FavouriteItem />
            <FavouriteItem />
        </div>

    </div>
  )
}

export default FavouriteSection