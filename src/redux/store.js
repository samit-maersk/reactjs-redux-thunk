import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './user/userSlice'

export default configureStore({
  reducer: {
    users: UserReducer,
  },
})