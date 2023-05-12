import { configureStore } from '@reduxjs/toolkit'
import routerReducer from './app/RouteSlice'
import deviceReducer from './app/DeviceSlice'
import currentChatReducer from './app/CurrentChatSlice'

export const store = configureStore({
  reducer: {
    router : routerReducer,
    device : deviceReducer,
    currentChat : currentChatReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch