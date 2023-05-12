import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentChatState {
    user: any,
    chatList : Array<string>
}

const initialState: CurrentChatState = {
    user: 'naveen',
    chatList : ['asdasd']
}

export const currentChatSlice = createSlice({
    name: 'currentChat',
    initialState,
    reducers: {

        setCurrentChatUser: (state , action: PayloadAction<string>) => {
            state.user = action.payload
        },
        
        addChatItemsToChatList : (state , action: PayloadAction<string>) => {
            state.chatList.push(action.payload); 
        },

        clearChatList : (state) => {
            state.chatList = [];
        },

    },

})

export const { setCurrentChatUser , addChatItemsToChatList , clearChatList } = currentChatSlice.actions
export default currentChatSlice.reducer