import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RouteState {
    currentRoute: string
}

const initialState: RouteState = {
    currentRoute: 'chat',
}

export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {

        setRoute: (state , payload:any) => {
            state.currentRoute = payload
        },
    },

})

export const { setRoute } = routeSlice.actions
export default routeSlice.reducer