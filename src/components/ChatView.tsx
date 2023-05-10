import { ThemeProvider, createTheme } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import ChatHeader from "./layout/ChatHeader"
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatItemMe from './chat-area/ChatItemMe';
import ChatItemOther from './chat-area/ChatItemOther';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});
  

function ChatView() {
  return (
    <div className="flex flex-col w-full">
        <ChatHeader />

        <div className="h-[100vh] flex-grow flex-col overflow-y-auto p-2">
            <ChatItemMe />
            <ChatItemMe />
            <ChatItemOther />
            <ChatItemMe />
            <ChatItemOther />
            <ChatItemMe />
        </div>

        <div className="flex justify-between h-[118px] p-4 w-full" style={{ borderTop : '1px solid rgba(255,255,255,0.1)' }}>
            <div className='flex w-[100%]'>

                <ThemeProvider theme={darkTheme}>
                    <TextField size="small" placeholder='Write a message' fullWidth className='my-auto  h-24 text-white' id="outlined-basic" variant="outlined" />
                </ThemeProvider>

                <div style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="ml-5 mt-1 flex justify-center w-[46px] cursor-pointer rounded-md hover:bg-slate-700 h-[36px] items-center">
                    <AttachFileIcon style={{ width: 20 }} />
                </div>

                <div style={{ border : '1px solid rgba(255,255,255,0.1)' }} className="ml-4 mt-1 mr-5 flex justify-center w-[46px] cursor-pointer rounded-md bg-[#0A80FF] hover:bg-[#0062E1] h-[36px] items-center">
                    <SendIcon style={{ width: 20 }} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default ChatView