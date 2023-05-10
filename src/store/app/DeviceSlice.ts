import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DeviceState {
    currentDevice: string
}

const initialState: DeviceState = {
    currentDevice: 'web',
}

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {

        setCurrentDevice: (state , action: PayloadAction<string>) => {
            state.currentDevice = action.payload
        },

    },

})

export const { setCurrentDevice } = deviceSlice.actions
export default deviceSlice.reducer