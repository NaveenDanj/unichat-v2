import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RouteState {
    currentRoute: string,
    sidebarOpen : boolean
}

const initialState: RouteState = {
    currentRoute: 'chat',
    sidebarOpen : false
}

export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {

        setRoute: (state , action: PayloadAction<string>) => {
            state.currentRoute = action.payload
        },

        setSidebarOpen : (state , action: PayloadAction<boolean>) => {
            state.sidebarOpen = action.payload
        }

    },

})

export const { setRoute , setSidebarOpen } = routeSlice.actions
export default routeSlice.reducer