import Avatar from '@mui/material/Avatar';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonIcon from '@mui/icons-material/Person';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArchiveIcon from '@mui/icons-material/Archive';


import { useSelector, useDispatch } from 'react-redux'
import { setRoute } from '../../store/app/RouteSlice'
import type { RootState } from '../../store/store'
import { useEffect } from 'react';



function SidebarLeft() {

    const route = useSelector((state: RootState) => state.router.currentRoute) 
    const dispatch = useDispatch()


    const handleRouteChange = (route : string) => {
        // console.log(route)
        dispatch(setRoute(route))
    }

    return (
        <>
            <div className=' justify-start'>
                <div className="flex justify-center w-full cursor-pointer hover:bg-slate-700 h-24 items-center">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="30px" height="30px" viewBox="0 0 612 612" >
                        <g>
                            <g id="_x32__26_">
                                <g>
                                <path d="M401.625,325.125h-191.25c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h191.25
                                c10.557,0,19.125-8.568,19.125-19.125S412.182,325.125,401.625,325.125z M439.875,210.375h-267.75
                                c-10.557,0-19.125,8.568-19.125,19.125s8.568,19.125,19.125,19.125h267.75c10.557,0,19.125-8.568,19.125-19.125
                                S450.432,210.375,439.875,210.375z M306,0C137.012,0,0,119.875,0,267.75c0,84.514,44.848,159.751,114.75,208.826V612
                                l134.047-81.339c18.552,3.061,37.638,4.839,57.203,4.839c169.008,0,306-119.875,306-267.75C612,119.875,475.008,0,306,0z
                                M306,497.25c-22.338,0-43.911-2.601-64.643-7.019l-90.041,54.123l1.205-88.701C83.5,414.133,38.25,345.513,38.25,267.75
                                c0-126.741,119.875-229.5,267.75-229.5c147.875,0,267.75,102.759,267.75,229.5S453.875,497.25,306,497.25z"></path>
                                </g>
                            </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                    </svg>
                </div>

                <div onClick={() => handleRouteChange('chat')} className='flex justify-center mt-4'>
                    <div className="flex justify-center w-[60px] cursor-pointer rounded-md hover:bg-[#0A80FF] h-[48px] items-center">
                        <ChatBubbleOutlineIcon style={{ width: 20 }} />
                    </div>
                </div>

                <div onClick={() => handleRouteChange('contact')} className='flex justify-center mt-4'>
                    <div className="flex justify-center w-[60px] cursor-pointer rounded-md hover:bg-[#0A80FF] h-[48px] items-center">
                        <PersonIcon style={{ width: 20 }} />
                    </div>
                </div>

                <div onClick={() => handleRouteChange('starred')} className='flex justify-center mt-4'>
                    <div className="flex justify-center w-[60px] cursor-pointer rounded-md hover:bg-[#0A80FF] h-[48px] items-center">
                        <StarBorderIcon style={{ width: 20 }} />
                    </div>
                </div>

                <div onClick={() => handleRouteChange('archived')} className='flex justify-center mt-4'>
                    <div className="flex justify-center w-[60px] cursor-pointer rounded-md hover:bg-[#0A80FF] h-[48px] items-center">
                        <ArchiveIcon style={{ width: 20 }} />
                    </div>
                </div>
            </div>

            <div className='flex flex-grow '>
                
            </div>

            <div className='flex flex-col justify-center mb-2'>
                <div className='flex justify-center mt-4'>
                    <div className="flex justify-center w-[60px] cursor-pointer rounded-md hover:bg-[#0A80FF] h-[48px] items-center">
                        <StarBorderIcon style={{ width: 20 }} />
                    </div>
                </div>

                <div className='flex justify-center mt-4 '>
                    <div className="p-3 flex justify-center w-[60px] cursor-pointer rounded-md hover:bg-slate-700 items-center">
                        <Avatar>N</Avatar>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SidebarLeft